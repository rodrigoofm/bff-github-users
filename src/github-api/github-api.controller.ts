import { Controller, Get, Param } from '@nestjs/common';
import { GithubApiService } from './github-api.service';

@Controller('github-api')
export class GithubApiController {
  constructor(private githubService: GithubApiService) {}

  @Get(':username')
  finByUsername(@Param('username') username: string) {
    return this.githubService.findByUsername(username);
  }

  @Get(':username/repos')
  findRepository(@Param('username') username: string) {
    return this.githubService.findRepository(username);
  }
}
