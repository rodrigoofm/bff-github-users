import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RepositoryDTO } from './dto/repositoryDTO';
import { Repository } from './model/repository';
import { User } from './model/user';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
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

  async findRepository(username: string): Promise<Repository[]> {
    return await this.repositoryModel.find({ login: username }).exec();
  }

  async createRepository(repo: RepositoryDTO) {
    return await this.repositoryModel.insertMany(repo);
  }
}
