import { Injectable } from '@nestjs/common';
import { GithubApiService } from '../github-api/github-api.service';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private githubApiService: GithubApiService,
  ) {}

  async findUsernameMongo(username: string) {
    const userMongo = await this.userRepository.findByUsername(username);

    if (userMongo != null) {
      return userMongo;
    }

    const userGit = await this.githubApiService.findByUsername(username);
    return await this.userRepository.create(userGit);
  }

  async findRepository(username: string) {
    const repoMongo = await this.userRepository.findRepository(username);

    if (repoMongo.length > 0) {
      return repoMongo;
    }

    // const repoGit = await this.githubApiService.findRepository
  }
}
