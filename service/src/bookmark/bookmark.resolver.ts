import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Bookmark } from './bookmark.model';
import { BookmarkService } from './bookmark.service';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/GqlAuthGuard';
@Resolver(() => Bookmark)
export class BookmarkResolver {
  constructor(private bookmarkService: BookmarkService) {}

  @Query(() => [Bookmark])
  bookmarks(): Promise<Bookmark[]> {
    return this.bookmarkService.findAll();
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Bookmark)
  async createBookmark(
    @Args('title') title: string,
    @Args('url') url: string,
    @CurrentUser() user: any,
  ): Promise<Bookmark> {
    return this.bookmarkService.create(title, url, user.id);
  }
}
