// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, Video, CategoryVideo } = initSchema(schema);

export {
  Category,
  Video,
  CategoryVideo
};