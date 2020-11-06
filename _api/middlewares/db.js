import { connect as dbConnect } from './../../lib/mongo';
import UserRepository from './../repositories/user-repository';

const withDatabase = () => handler => async (req, res) => {
  const db = await dbConnect();

  req.db = db;
  req.userRepository = new UserRepository(db);

  return handler(req, res);
};

export default withDatabase;
