import * as mongoose from 'mongoose';
import { string } from 'yargs';

export const RepositorySchema = new mongoose.Schema({
  id: string,
  node_id: string,
  name: string,
  full_name: string,
  html_url: string,
});
