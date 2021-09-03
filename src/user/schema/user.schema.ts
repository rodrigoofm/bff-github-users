import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    login: String,
    id: String,
    node_id: String,
    name: String,
    html_url: String,
    repos_url: String,
    updated_at: String,
    created_at: String,
    email: String,
  },
  { timestamps: { createdAt: 'created_at_mongo' } },
);

UserSchema.index({ created_at_mongo: 1 }, { expires: '1h' });
