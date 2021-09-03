import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './model/user';

import { RepositoryDTO } from './dto/repositoryDTO';
import { Repository } from './model/repository';
@Injectable()
export class UserRepository {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
    @InjectModel('Repository')
    private readonly repositoryModel: Model<Repository>,
  ) {}

  async create(user: any): Promise<User> {
    const createUser = new this.userModel(user);

    return await createUser.save();
  }

  async findByUsername(username: string): Promise<User> {
    return await this.userModel.findOne({ login: username }).exec();
  }

  async findRepos(username: string): Promise<Repository[]> {
    return await this.repositoryModel.find({ login: username }).exec();
  }

  async createRepos(repo: RepositoryDTO[]) {
    return await this.repositoryModel.insertMany(repo);
  }
}
