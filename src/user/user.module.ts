import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GithubApiModule } from '../github-api/github-api.module';
import { User } from './model/user';
import { UserSchema } from './schema/user.schema';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { RepositorySchema } from './schema/repository.schema';
import { HttpModule } from '@nestjs/axios';
import { Repository } from './model/repository';

@Module({
  imports: [
    GithubApiModule,
    HttpModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Repository.name, schema: RepositorySchema, collection: 'repos' },
    ]),
  ],
  providers: [UserService, UserRepository, UserResolver],
})
export class UserModule {}
