import provinces from '@/apps/database/data/provinces.json';
import { prisma } from './client';

export async function seedDistricts() {
  for (const province of provinces) {
    const existProvince = await prisma.province.findUnique({
      where: {
        code: province.Code,
      },
    });

    if (!existProvince) {
      continue;
    }

    for (const district of province.Wards) {
      await prisma.district.upsert({
        where: {
          provinceId_code: {
            provinceId: existProvince.id,
            code: district.Code,
          },
        },

        update: {
          name: district.Name,
        },

        create: {
          code: district.Code,
          name: district.Name,
          provinceId: existProvince.id,
        },
      });
    }
  }
}
