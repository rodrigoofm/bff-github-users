import { Test, TestingModule } from '@nestjs/testing';
import { GithubApiService } from '../github-api/github-api.service';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;

  const userRepositoryMock = {
    findByUsername: (username: string) => Promise.resolve({ login: username }),
  };

  const githubApiMock = {
    findByUsername: (username: string) => Promise.resolve({ login: username }),
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

  it('shoul get user by username', async () => {
    const username = 'rodrigoofm';
    const user = await userService.findUsernameMongo(username);
    expect(user).toBeDefined();
    expect(user.login).toBe(username);
  });
});
