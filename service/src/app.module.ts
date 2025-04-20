import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module'; // ← これを追加！！

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    BookmarkModule,
    AuthModule, // ← これが必要！！
  ],
  providers: [PrismaService],
})
export class AppModule {}
