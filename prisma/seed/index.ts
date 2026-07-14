import { prisma } from './client';

import { seedBrands } from './brands.seed';
import { seedCarModels } from './car-models.seed';
import { seedCarVersions } from './car-versions.seed';
import { seedCountries } from './country.seed';
import { seedDistricts } from './districts.seed';
import { seedProvinces } from './provinces.seed';

async function main() {
  console.log('Seeding...');

  await seedCountries();

  await seedBrands();

  await seedCarModels();

  await seedCarVersions();

  await seedProvinces();

  await seedDistricts();

  console.log('Done');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
