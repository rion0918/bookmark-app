import { ObjectType, Field, Int } from '@nestjs/graphql';

//GraphQL スキーマに自動変換されるクラス
@ObjectType()
export class Bookmark {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  url: string;
}
