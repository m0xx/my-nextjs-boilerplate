import Joi from '@hapi/joi';

const mapJoiError = ({ type, message, context: { key, value } }) => ({
  field: key,
  code: type,
  message
});

const withValidation = ({
  query: querySchema = null,
  body: bodySchema = null
}) => handler => async (req, res) => {
  if (querySchema) {
    const schema = Joi.isSchema(querySchema) ? querySchema : Joi.object(querySchema);

    const result = schema.validate(req.query, { abortEarly: false });
    if (result.error && result.error.details.length) {
      res.status(400).json({ errors: result.error.details.map(mapJoiError) });
      return;
    }
  }

  if (['POST', 'PUT', 'PATCH'].indexOf(req.method) > -1 && bodySchema) {
    const schema = Joi.isSchema(bodySchema) ? bodySchema : Joi.object(bodySchema);

    const result = schema.validate(req.body, { abortEarly: false });
    if (result.error && result.error.details.length) {
      res.status(400).json({ errors: result.error.details.map(mapJoiError) });
      return;
    }
  }

  await handler(req, res);
};

export default withValidation;
