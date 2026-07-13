import versions from '@/apps/database/data/versions.json';
import { prisma } from './client';

export async function seedCarVersions() {
  for (const item of versions) {
    const model = await prisma.carModel.findFirst({
      where: {
        name: item.model,
      },
    });

    if (!model) continue;

    for (const version of item.versions) {
      await prisma.carVersion.upsert({
        where: {
          modelId_name: {
            modelId: model.id,
            name: version.name,
          },
        },
        update: {
          name: version.name,
          yearFrom: version.yearFrom,
          yearTo: version.yearTo,
        },
        create: {
          modelId: model.id,
          name: version.name,
          yearFrom: version.yearFrom,
          yearTo: version.yearTo,
        },
      });
    }
  }
}
