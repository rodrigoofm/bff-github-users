import { Document } from 'mongoose';

export class User extends Document {
  login: string;
  id: string;
  node_id: string;
  name: string;
  html_url: string;
  repos_url: string;
  updated_at: string;
  created_at: string;
  email: string;
}
