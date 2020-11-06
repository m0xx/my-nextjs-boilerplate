import Joi from '@hapi/joi';
import withDatabase from './middlewares/db';
import GenericError from './lib/generic-error';
import ApiError from "./lib/api-error";

const create = {
  method: 'POST',
  path: 'users',
  validation: {
    body: {
      email: Joi.string().email().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required()
    }
  },
  middlewares: [withDatabase()],
  handler: async function createUser(req, res) {
    const { email, firstName, lastName } = req.body;

    try {
      const user = await req.userRepository.create({ email, firstName, lastName });

      res.status(200).json(user);
    } catch (err) {
      if (err.message === 'user_already_exists') {
        throw new GenericError({
          message: 'Ce email est déjà utilisé.',
          field: 'email',
          code: 'user_exists'
        });
      }

      throw err;
    }
  }
};

const getById = {
  method: 'GET',
  path: 'users/:userId',
  middlewares: [withDatabase()],
  handler: async function createUser(req, res) {
    const { userId } = req.urlParams;

    const user = await req.userRepository.findById(userId);


    if(!user) {
      req.log.info(`User with id ${userId} doesn't exists...`);
      throw ApiError.notFound("User not found.");
    }

    req.log.info(`found user`);
    req.log.info(user);
    return res.status(200).json(user);
  }
};


export default [create, getById];
