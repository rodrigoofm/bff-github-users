import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GithubApiService } from './github-api.service';
import { GithubApiController } from './github-api.controller';
import { GithubApiHttpClient } from './github-api-http-client';

@Module({
  imports: [HttpModule],
  providers: [GithubApiService, GithubApiHttpClient],
  controllers: [GithubApiController],
})
export class GithubApiModule {}
