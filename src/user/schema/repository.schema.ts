import * as mongoose from 'mongoose';

export const RepositorySchema = new mongoose.Schema({
  id: String,
  login: String,
  node_id: String,
  name: String,
  full_name: String,
  html_url: String,
});
