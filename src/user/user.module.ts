import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GithubApiModule } from '../github-api/github-api.module';
import { GithubApiService } from '../github-api/github-api.service';
import { User } from './model/user';
import { UserSchema } from './schema/user.schema';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [
    GithubApiModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserService, UserRepository, GithubApiService, UserResolver],
})
export class UserModule {}
