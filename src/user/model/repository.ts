import { Document } from 'mongoose';

export class Repository extends Document {
  id: string;
  login: string;
  node_id: string;
  name: string;
  full_name: string;
  html_url: string;
}
