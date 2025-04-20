import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Bookmark } from './bookmark.model';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Bookmark[]> {
    return await this.prisma.bookmark.findMany();
  }

  async create(title: string, url: string, userId: number): Promise<Bookmark> {
    return await this.prisma.bookmark.create({
      data: {
        title,
        url,
        user: {
          connect: { id: userId },
        },
      },
    });
  }
}
