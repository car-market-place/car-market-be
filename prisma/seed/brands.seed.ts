import brands from '@/apps/database/data/brands.json';
import { prisma } from './client';

export async function seedBrands() {
  for (const brand of brands) {
    await prisma.brand.upsert({
      where: {
        slug: brand.slug,
      },
      update: {},
      create: {
        name: brand.name,
        slug: brand.slug,
        country: {
          connect: {
            slug: brand.country,
          },
        },
      },
    });
  }
}
