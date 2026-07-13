import { ResponseUtil } from '@/apps/api/common/utils/response';
import { PrismaService } from '@/apps/database/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LocationsService {
  constructor(private readonly prisma: PrismaService) {}

  async getProvinces() {
    const provinces = await this.prisma.province.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    return ResponseUtil.success(provinces);
  }

  async getDistrictsByProvince(provinceId: string) {
    const province = await this.prisma.province.findUnique({
      where: {
        id: provinceId,
      },
      include: {
        districts: {
          orderBy: {
            name: 'asc',
          },
        },
      },
    });

    if (!province) {
      throw new NotFoundException('Province not found');
    }

    return ResponseUtil.success(province.districts);
  }

  async getProvinceById(provinceId: string) {
    const province = await this.prisma.province.findUnique({
      where: {
        id: provinceId,
      },
    });

    if (!province) {
      throw new NotFoundException('Province not found');
    }

    return ResponseUtil.success(province);
  }
}
