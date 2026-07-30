import { CursorSearchDto } from '@/apps/api/common/dto/base/cursor-search';
import { cursorSearch, decodeCursor } from '@/apps/api/common/utils/cursor-search';
import { PrismaService } from '@/apps/database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CarModelsService {
  constructor(private prisma: PrismaService) {}

  async findAll(dto: CursorSearchDto) {
    const { keyword, cursor } = dto;
    const decodeCursorDto = cursor ? decodeCursor(cursor) : undefined;

    return cursorSearch(
      (take) =>
        this.prisma.carModel.findMany({
          where: {
            ...(keyword?.trim()
              ? {
                  name: {
                    contains: keyword.trim(),
                    mode: 'insensitive',
                  },
                }
              : {}),

            ...(cursor
              ? {
                  OR: [
                    {
                      createdAt: {
                        lt: decodeCursorDto?.createdAt,
                      },
                    },
                    {
                      createdAt: decodeCursorDto?.createdAt,
                      id: {
                        lt: decodeCursorDto?.id,
                      },
                    },
                  ],
                }
              : {}),
          },

          select: {
            id: true,
            name: true,
            slug: true,
            createdAt: true,
          },

          orderBy: [
            {
              createdAt: 'desc',
            },
            {
              id: 'desc',
            },
          ],

          take,
        }),
      20,
    );
  }
}
