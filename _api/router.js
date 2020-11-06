import Router from 'find-my-way';
import withValidation from './middlewares/joi-validation';
import withLogger from './middlewares/logger';
import GenericError from './lib/generic-error';
import ApiError, {ERROR_CODES} from "./lib/api-error";

const router = Router({
  caseSensitive: false,
  defaultRoute(req, res) {
    res.status(404).json({ message: 'Not found' });
  }
});

const compose = (...middlewares) => handler =>
  middlewares.reverse().reduce((h, middleware) => middleware(h), handler);

const addRoute = ({ method, path, auth = true, validation = false, middlewares = [], handler }) => {
  router.on(method, `/api/v1/${path}`, (req, res, params) => {
    delete req.query['v1'];

    const defaultMiddlewares = [withLogger()];

    if (validation) {
      defaultMiddlewares.push(withValidation(validation));
    }

    req.urlParams = params;

    const finalHandler = compose(...[...defaultMiddlewares, ...middlewares])(handler);

    finalHandler(req, res, params)
      .then(() => {})
      .catch(err => {
        if (err instanceof GenericError) {
          return res.status(400).json({
            errors: [
              {
                code: err.code,
                field: err.field,
                message: err.message
              }
            ]
          });
        }
        if (err instanceof ApiError) {
          return res.status(err.statusCode).json({
                code: err.code,
                message: err.message
          });
        }

        console.error(err);

        res.status(500).json({
          code: 'unknown',
          message: err.message
        });
      });
  });
};

const addRoutes = routes => routes.forEach(route => addRoute(route));

addRoutes(require('./users').default);
addRoutes(require('./versions').default);

export default router;
