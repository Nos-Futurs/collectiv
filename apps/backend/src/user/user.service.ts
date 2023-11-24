import { TagsOnUsersDto, UserDto } from '@collectiv/db-entities/backend';
import { Injectable } from '@nestjs/common';
import PrismaService from '~/database/prisma.service.js';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findOne(email: string): Promise<UserDto | undefined> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  addTag(userId: number, tagId: number): Promise<UserDto> {
    return this.prisma.user.update({
      where: { id: Number(userId) },
      data: {
        tags: {
          create: [
            {
              tag: {
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

  removeTag(userId: number, tagId: number): Promise<TagsOnUsersDto> {
    return this.prisma.tagsOnUsers.delete({
      where: { tagId_userId: { userId, tagId } },
    });
  }
}
