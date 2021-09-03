import { Test, TestingModule } from '@nestjs/testing';
import { GithubApiService } from '../github-api/github-api.service';
import { RepositoryDTO } from './dto/repositoryDTO';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;

  const userRepositoryMock = {
    findByUsername: (username: string) => Promise.resolve({ login: username }),
    create: (user: any) => Promise.resolve(user),
    findRepos: (username: string) => Promise.resolve([{ login: username }]),
    createRepos: (repo: RepositoryDTO) => Promise.resolve(repo),
  };

  const githubApiMock = {
    findByUsername: (username: string) => Promise.resolve({ login: username }),
    findRepos: (username: string) => Promise.resolve([{ login: username }]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, GithubApiService, UserRepository],
    })
      .overrideProvider(UserRepository)
      .useValue(userRepositoryMock)
      .overrideProvider(GithubApiService)
      .useValue(githubApiMock)
      .compile();

    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  it('should get user by username', async () => {
    const username = 'rodrigoofm';
    const user = await userService.findUsernameMongo(username);
    expect(user).toBeDefined();
    expect(user.login).toBe(username);
  });

  it('should get user from github-api', async () => {
    jest
      .spyOn(userRepositoryMock, 'findByUsername')
      .mockResolvedValueOnce(null);

    const username = 'rodrigoofm';
    const user = await userService.findUsernameMongo(username);

    expect(user).toBeDefined();
    expect(user.login).toBe(username);
  });

  it('should get repos from mongo by username', async () => {
    const username = 'rodrigoofm';
    const repos = await userService.findRepos(username);
    expect(repos).toBeDefined();
    expect(repos[0].login).toBe(username);
  });

  it('shoul get repos from github-api', async () => {
    jest.spyOn(userRepositoryMock, 'findRepos').mockResolvedValueOnce([]);

    const username = 'rodrigoofm';
    const repos = await userService.findRepos(username);

    expect(repos).toBeDefined();
    expect(repos[0].login).toBe(username);
  });
});
