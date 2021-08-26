import { Test, TestingModule } from '@nestjs/testing';
import { checkServerIdentity } from 'tls';
import { GithubApiHttpClient } from './github-api-http-client';
import { GithubApiService } from './github-api.service';

describe('GithubApiService', () => {
  let service: GithubApiService;

  const githubHttpClientMock = {
    findByUsername: (username: string) => Promise.resolve({ login: username }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GithubApiService, GithubApiHttpClient],
    })
      .overrideProvider(GithubApiHttpClient)
      .useValue(githubHttpClientMock)
      .compile();

    service = module.get<GithubApiService>(GithubApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get user by username', async () => {
    const username = 'rodrigo';
    const user = await service.findByUsername(username);
    expect(user).toBeDefined();
    expect(user.login).toBe(username);
  });
});
