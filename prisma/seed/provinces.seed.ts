import provinces from '@/apps/database/data/provinces.json';
import { prisma } from './client';

export async function seedProvinces() {
  for (const province of provinces) {
    await prisma.province.upsert({
      where: {
        code: province.Code,
      },

      update: {
        name: province.Name,
      },

      create: {
        code: province.Code,
        name: province.Name,
      },
    });
  }
}
