import countries from '@/apps/database/data/countries.json';
import { prisma } from './client';

export async function seedCountries() {
  console.log('🌍 Seeding countries...');
  for (const country of countries) {
    await prisma.country.upsert({
      where: {
        slug: country.slug,
      },
      update: {
        name: country.name,
        slug: country.slug,
      },
      create: {
        code: country.code,
        code3: country.code3,
        name: country.name,
        nameEn: country.nameEn,
        slug: country.slug,
      },
    });
  }

  console.log(`✅ Seeded ${countries.length} countries`);
}
