import { ResponseUtil } from '@/apps/api/common/utils/response';
import { PrismaService } from '@/apps/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { QueryCarVersionDto } from './dto';

@Injectable()
export class CarVersionsService {
  constructor(private prisma: PrismaService) {}

  async findAll(query: QueryCarVersionDto) {
    const { page = 1, limit = 20 } = query;
    const skip = query.skip;

    const [data, total] = await Promise.all([
      this.prisma.carVersion.findMany({
        skip,
        take: limit,
      }),

      this.prisma.carVersion.count(),
    ]);

    return ResponseUtil.success(data, {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  }
}
