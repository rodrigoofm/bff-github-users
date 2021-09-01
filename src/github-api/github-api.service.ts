import { Injectable } from '@nestjs/common';
import { GithubApiHttpClient } from './github-api-http-client';

@Injectable()
export class GithubApiService {
  constructor(private githubApiHttpClient: GithubApiHttpClient) {}

  findByUsername(username: string) {
    return this.githubApiHttpClient.findByUsername(username);
  }

  async findRepository(username: string) {
    return await this.githubApiHttpClient.findRepository(username);
  }
}
