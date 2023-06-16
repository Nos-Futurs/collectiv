import { Injectable } from '@nestjs/common';
import { TagsOnUsers, User } from '@prisma/client';
import PrismaService from '../database/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  addTag(userId: number, tagId: number): Promise<User> {
    return this.prisma.user.update({
      where: { id: Number(userId) },
      data: {
        tags: {
          create: [
            {
              tag : {
                connect: {
                  id: tagId,
                },
              },
            },
          ],
        },
      },
    });
  }

  removeTag(userId: number, tagId: number): Promise<TagsOnUsers> {
    return this.prisma.tagsOnUsers.delete({
      where: { tagId_userId: { userId, tagId} },
    });
  }
}
