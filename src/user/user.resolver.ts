import { Args, Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { RepositoryDTO } from './dto/repositoryDTO';
import { UserDTO } from './dto/userDTO';
import { UserService } from './user.service';

@Resolver(() => UserDTO)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserDTO)
  async findByUsername(@Args('username') username: string) {
    return this.userService.findUsernameMongo(username);
  }

  @ResolveField('repository', () => [RepositoryDTO])
  async getRepos(@Parent() user: UserDTO) {
    const { login } = user;
    return this.userService.findRepos(login);
  }
}
