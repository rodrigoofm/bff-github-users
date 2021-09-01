import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserDTO {
  @Field({ nullable: true })
  login?: string;

  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  node_id?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  html_url?: string;

  @Field({ nullable: true })
  repos_url?: string;

  @Field({ nullable: true })
  updated_at?: string;

  @Field({ nullable: true })
  created_at?: string;

  @Field({ nullable: true })
  email?: string;
}
