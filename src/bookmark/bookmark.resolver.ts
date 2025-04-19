import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Bookmark } from './bookmark.model';
import { BookmarkService } from './bookmark.service';

@Resolver(() => Bookmark)
export class BookmarkResolver {
  constructor(private bookmarkService: BookmarkService) {}

  @Query(() => [Bookmark])
  bookmarks(): Promise<Bookmark[]> {
    return this.bookmarkService.findAll();
  }

  @Mutation(() => Bookmark)
  createBookmark(
    @Args('title') title: string,
    @Args('url') url: string,
  ): Promise<Bookmark> {
    return this.bookmarkService.create(title, url);
  }
}
