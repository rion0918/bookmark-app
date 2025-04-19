import { Module } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { BookmarkResolver } from './bookmark.resolver';

@Module({
  providers: [BookmarkService, BookmarkResolver],
})
export class BookmarkModule {}
