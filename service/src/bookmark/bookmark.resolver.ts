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
  async createBookmark(
    @Args('title') title: string,
    @Args('url') url: string,
  ): Promise<Bookmark> {
    // 認証なしのため userId を仮で 1 に固定（必要に応じて変更可能）
    return this.bookmarkService.create(title, url, 1);
  }
}
