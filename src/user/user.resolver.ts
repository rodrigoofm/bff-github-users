import { Args, Resolver, Query } from '@nestjs/graphql';
import { UserDTO } from './dto/userDTO';
import { UserService } from './user.service';

@Resolver(() => UserDTO)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserDTO)
  async findByUsername(@Args('username') username: string) {
    return this.userService.findUsernameMongo(username);
  }
}
