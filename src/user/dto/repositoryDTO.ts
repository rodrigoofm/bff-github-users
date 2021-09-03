import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RepositoryDTO {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  node_id?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  full_name?: string;

  @Field({ nullable: true })
  html_url?: string;
}
