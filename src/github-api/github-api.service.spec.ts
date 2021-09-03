import { Test, TestingModule } from '@nestjs/testing';
import { GithubApiHttpClient } from './github-api-http-client';
import { GithubApiService } from './github-api.service';

describe('GithubApiService', () => {
  let githubApiService: GithubApiService;

  const githubHttpClientMock = {
    findByUsername: (username: string) => Promise.resolve({ login: username }),
    findRepos: (username: string) => Promise.resolve([{ login: username }]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GithubApiService, GithubApiHttpClient],
    })
      .overrideProvider(GithubApiHttpClient)
      .useValue(githubHttpClientMock)
      .compile();

    githubApiService = module.get<GithubApiService>(GithubApiService);
  });

  it('should be defined', () => {
    expect(githubApiService).toBeDefined();
  });

  it('should get user by username', async () => {
    const username = 'rodrigo';
    const user = await githubApiService.findByUsername(username);
    expect(user).toBeDefined();
    expect(user.login).toBe(username);
  });

  it('should get repository by username', async () => {
    const username = 'rodrigo';
    const repos = await githubApiService.findRepos(username);
    expect(repos).toBeDefined();
    expect(repos[0].login).toBe(username);
  });
});
