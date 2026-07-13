import models from '@/apps/database/data/car-model.json';
import { prisma } from './client';

export async function seedCarModels() {
  for (const brandData of models) {
    const brand = await prisma.brand.findUnique({
      where: {
        slug: brandData.brandSlug,
      },
    });

    if (!brand) {
      console.log(`Brand ${brandData.brandSlug} not found`);
      continue;
    }

    for (const item of brandData.models) {
      await prisma.carModel.upsert({
        where: {
          brandId_slug: {
            brandId: brand.id,
            slug: item.slug,
          },
        },
        update: {
          name: item.name,
          slug: item.slug,
        },
        create: {
          brandId: brand.id,
          name: item.name,
          slug: item.slug,
        },
      });
    }
  }

  console.log('Seed car models completed.');
}
