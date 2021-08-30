import { Injectable } from '@nestjs/common';
import { GithubApiService } from 'src/github-api/github-api.service';
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

    console.log(userMongo);

    const userGit = await this.githubApiService.findByUsername(username);

    console.log(userGit);

    return await this.userRepository.create(userGit);
  }
}
