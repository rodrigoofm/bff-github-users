import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './model/user';

@Injectable()
export class UserRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(user: any): Promise<User> {
    const createUser = new this.userModel(user);

    return await createUser.save();
  }

  async findByUsername(username: string): Promise<User> {
    return await this.userModel.findOne({ username: username }).exec();
  }
}
