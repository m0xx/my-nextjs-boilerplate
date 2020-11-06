const { MongoClient, ObjectID } = require('mongodb');
const { DATABASE_NAME, DATABASE_URI } = require('./config');

const mongoClient = new MongoClient(DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connect = async function connect() {
  if (!mongoClient.isConnected()) {
    await mongoClient.connect();
    console.log('Successfully connected to database!');
  }

  return mongoClient.db(DATABASE_NAME);
};

const toObjectId = id => {
  if (!id) {
    throw new Error("id can't be empty...");
  }

  return typeof id === 'string' ? ObjectID(id) : id;
};

module.exports = {
  mongoClient,
  connect,
  toObjectId
};
