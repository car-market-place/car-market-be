import { CreateListingDto } from '@/apps/api/common/dto/listing';
import { QueryListingDto } from '@/apps/api/common/dto/listing/pagination';
import { ResponseUtil } from '@/apps/api/common/utils/response';
import { ensureExists } from '@/apps/api/common/validators/prisma-exists.validator';
import { PrismaService } from '@/apps/database/prisma.service';
import {
  BadRequestException,
  HttpException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class ListingService {
  private readonly logger = new Logger(ListingService.name);

  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: QueryListingDto) {
    const { page = 1, limit = 20 } = query;
    const skip = query.skip;

    const [data, total] = await Promise.all([
      this.prisma.listing.findMany({
        skip,
        take: limit,
      }),

      this.prisma.listing.count(),
    ]);

    return ResponseUtil.success(data, {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  }

  async getListingById(id: string) {
    const data = await this.prisma.listing.findUnique({
      where: {
        id,
      },
    });

    return ResponseUtil.success(data);
  }

  async createListing(userId: string, dto: CreateListingDto) {
    await ensureExists(
      this.prisma.brand.findUnique({
        where: {
          id: dto.brandId,
        },
      }),
      'Brand not found',
    );

    await ensureExists(
      this.prisma.carModel.findUnique({
        where: {
          id: dto.modelId,
        },
      }),
      'Model not found',
    );

    await ensureExists(
      this.prisma.carVersion.findUnique({
        where: {
          id: dto.versionId,
        },
      }),
      'Version not found',
    );

    await ensureExists(
      this.prisma.province.findUnique({
        where: {
          id: dto.provinceId,
        },
      }),
      'Province not found',
    );

    await ensureExists(
      this.prisma.district.findUnique({
        where: {
          id: dto.districtId,
        },
      }),
      'District not found',
    );

    try {
      return this.prisma.listing.create({
        data: {
          user: {
            connect: {
              id: userId,
            },
          },

          brand: {
            connect: {
              id: dto.brandId,
            },
          },

          model: {
            connect: {
              id: dto.modelId,
            },
          },

          ...(dto.versionId && {
            version: {
              connect: {
                id: dto.versionId,
              },
            },
          }),

          province: {
            connect: {
              id: dto.provinceId,
            },
          },

          district: {
            connect: {
              id: dto.districtId,
            },
          },

          title: dto.title,

          slug: dto.title,

          description: dto.description,

          year: dto.year,

          mileage: dto.mileage,

          address: dto.address,

          contactName: dto.contactName,

          contactPhone: dto.contactPhone,

          contactEmail: dto.contactEmail,

          ...(dto.specification && {
            specification: {
              create: dto.specification,
            },
          }),
        },
      });
    } catch (error) {
      this.logger.error('Create listing failed', error.stack);
      this.logger.error(error);

      if (error instanceof HttpException) {
        throw error;
      }

      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        this.logger.error(`Prisma Error Code: ${error.code}`);
        this.logger.error(error.meta);

        switch (error.code) {
          case 'P2002':
            throw new BadRequestException('Dữ liệu đã tồn tại.');

          case 'P2003':
            throw new BadRequestException('Dữ liệu liên kết không hợp lệ (Foreign Key).');

          case 'P2025':
            throw new BadRequestException('Không tìm thấy dữ liệu liên quan.');
        }
      }

      throw new InternalServerErrorException('Create listing failed.');
    }
  }
}
