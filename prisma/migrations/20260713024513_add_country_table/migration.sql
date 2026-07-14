/*
  Warnings:

  - A unique constraint covering the columns `[brandId,slug]` on the table `CarModel` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `countryId` to the `Brand` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."CarModel_brandId_name_key";

-- AlterTable
ALTER TABLE "Brand" ADD COLUMN     "countryId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Country_slug_key" ON "Country"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "CarModel_brandId_slug_key" ON "CarModel"("brandId", "slug");

-- AddForeignKey
ALTER TABLE "Brand" ADD CONSTRAINT "Brand_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
