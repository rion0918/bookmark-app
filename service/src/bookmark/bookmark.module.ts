import { Module } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { BookmarkResolver } from './bookmark.resolver';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [BookmarkService, BookmarkResolver, PrismaService],
})
export class BookmarkModule {}
