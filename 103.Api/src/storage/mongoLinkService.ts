import { Collection, MongoClient } from 'mongodb';
import { LinkService } from '../types/index';

const dbName = 'RSShool';
const url = `mongodb+srv://anastaisafedotova:2020rsscool@cluster.dlqi4.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const collectionName = 'linksService';

const getMongoInstance = async () => {
  const client = await MongoClient.connect(url);

  return client.db(dbName);
}

const getCollection = async (): Promise<Collection> => {
  const db = await getMongoInstance();

  return db.collection(collectionName);
}

const listAll = async () => {
  const collection = await getCollection();

  return collection.find({}).toArray();
};

const getById = async (id: string) => {
  const collection = await getCollection();

  return await collection.findOne({ id });
};

const create = async (item: LinkService) => {
  const collection = await getCollection();

  const response = await  collection.insertOne(item);

  return response.ops[0];
};

const update = async (item: LinkService) => {
  const collection = await getCollection();

  const id = item._id;

  const response = await collection.replaceOne({ id }, item);

  return response.ops[0];
};

const remove = async (id: string) => {
  const collection = await getCollection();

  return collection.deleteOne({ id });
};

export {
  listAll,
  getById,
  create,
  update,
  remove
}
