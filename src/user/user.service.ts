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
    const userGit = await this.githubApiService.findByUsername(username);

    if (userMongo != null) {
      return userMongo;
    }

    return await this.userRepository.create(userGit);
  }
}
