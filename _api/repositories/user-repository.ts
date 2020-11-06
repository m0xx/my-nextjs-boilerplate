import { toObjectId } from '../../lib/mongo';

export type AddUserCmd = {
  email: string;
  firstName: string;
  lastName: string;
};

export type User = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
};

module.exports = function (db) {
  async function create({ email, firstName, lastName }: AddUserCmd): Promise<User> {
    try {
      const { insertedId } = await db.collection('users').insertOne({
        email,
        firstName,
        lastName,
      });

      return findById(insertedId);
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        throw new Error('user_already_exits');
      }

      throw err;
    }
  }

  async function findById(id: String): Promise<User> {
    return db.collection('users').findOne({ _id: toObjectId(id) });
  }

  return {
    create,
    findById
  };
};
