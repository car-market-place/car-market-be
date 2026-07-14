/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Country` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code3` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameEn` to the `Country` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Country_name_key";

-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "code3" TEXT NOT NULL,
ADD COLUMN     "nameEn" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Country_code_key" ON "Country"("code");
