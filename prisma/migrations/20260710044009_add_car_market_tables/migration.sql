-- CreateEnum
CREATE TYPE "CarCondition" AS ENUM ('NEW', 'USED');

-- CreateEnum
CREATE TYPE "SteeringPosition" AS ENUM ('LEFT', 'RIGHT');

-- CreateEnum
CREATE TYPE "ExteriorColor" AS ENUM ('WHITE', 'BLACK', 'SILVER', 'GRAY', 'RED', 'BLUE', 'GREEN', 'YELLOW', 'ORANGE', 'BROWN', 'BEIGE', 'GOLD', 'PURPLE', 'OTHER');

-- CreateEnum
CREATE TYPE "InteriorColor" AS ENUM ('BLACK', 'GRAY', 'BEIGE', 'BROWN', 'RED', 'WHITE', 'OTHER');

-- CreateEnum
CREATE TYPE "ImageType" AS ENUM ('COVER', 'EXTERIOR', 'INTERIOR', 'ENGINE', 'DASHBOARD', 'DOCUMENT', 'OTHER');

-- CreateEnum
CREATE TYPE "ImageStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- DropEnum
DROP TYPE "public"."UserRole";

-- CreateTable
CREATE TABLE "CarSpecification" (
    "id" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "bodyType" "BodyType" NOT NULL,
    "transmission" "Transmission" NOT NULL,
    "fuelType" "FuelType" NOT NULL,
    "driveType" "DriveType" NOT NULL,
    "condition" "CarCondition" NOT NULL,
    "exteriorColor" "ExteriorColor" NOT NULL,
    "interiorColor" "InteriorColor" NOT NULL,
    "steeringPosition" "SteeringPosition" NOT NULL,
    "seats" INTEGER NOT NULL,
    "doors" INTEGER NOT NULL,
    "engineCapacity" INTEGER,
    "horsepower" INTEGER,

    CONSTRAINT "CarSpecification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ListingImage" (
    "id" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "type" "ImageType" NOT NULL,
    "status" "ImageStatus" NOT NULL DEFAULT 'APPROVED',
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ListingImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportListing" (
    "id" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "reporterId" TEXT NOT NULL,
    "resolvedById" TEXT,
    "reason" "ReportReason" NOT NULL,
    "status" "ReportStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReportListing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "listing_histories" (
    "id" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "action" "HistoryAction" NOT NULL,
    "userId" TEXT,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "listing_histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "listing_boosts" (
    "id" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "packageId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiredAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "listing_boosts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "boost_packages" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "BoostType" NOT NULL,
    "description" TEXT,
    "duration" INTEGER NOT NULL,
    "boostScore" INTEGER NOT NULL,
    "price" DECIMAL(18,2) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "boost_packages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarModel" (
    "id" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CarModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarVersion" (
    "id" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "yearFrom" INTEGER,
    "yearTo" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CarVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Province" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Province_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "District" (
    "id" TEXT NOT NULL,
    "provinceId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "listings" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,
    "versionId" TEXT,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "year" INTEGER NOT NULL,
    "mileage" INTEGER NOT NULL,
    "provinceId" TEXT NOT NULL,
    "districtId" TEXT NOT NULL,
    "address" TEXT,
    "contactName" TEXT NOT NULL,
    "contactPhone" TEXT NOT NULL,
    "contactEmail" TEXT,
    "status" "ListingStatus" NOT NULL DEFAULT 'DRAFT',
    "publishedAt" TIMESTAMP(3),
    "approvedAt" TIMESTAMP(3),
    "approvedById" TEXT,
    "rejectedAt" TIMESTAMP(3),
    "rejectedReason" TEXT,
    "soldAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "favoriteCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "featuredUntil" TIMESTAMP(3),

    CONSTRAINT "listings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CarSpecification_listingId_key" ON "CarSpecification"("listingId");

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_userId_listingId_key" ON "Favorite"("userId", "listingId");

-- CreateIndex
CREATE INDEX "listing_histories_listingId_idx" ON "listing_histories"("listingId");

-- CreateIndex
CREATE INDEX "listing_histories_action_idx" ON "listing_histories"("action");

-- CreateIndex
CREATE INDEX "listing_histories_createdAt_idx" ON "listing_histories"("createdAt");

-- CreateIndex
CREATE INDEX "listing_boosts_listingId_idx" ON "listing_boosts"("listingId");

-- CreateIndex
CREATE INDEX "listing_boosts_packageId_idx" ON "listing_boosts"("packageId");

-- CreateIndex
CREATE INDEX "listing_boosts_userId_idx" ON "listing_boosts"("userId");

-- CreateIndex
CREATE INDEX "listing_boosts_expiredAt_idx" ON "listing_boosts"("expiredAt");

-- CreateIndex
CREATE INDEX "boost_packages_type_idx" ON "boost_packages"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_slug_key" ON "Brand"("slug");

-- CreateIndex
CREATE INDEX "CarModel_brandId_idx" ON "CarModel"("brandId");

-- CreateIndex
CREATE UNIQUE INDEX "CarModel_brandId_name_key" ON "CarModel"("brandId", "name");

-- CreateIndex
CREATE INDEX "CarVersion_modelId_idx" ON "CarVersion"("modelId");

-- CreateIndex
CREATE UNIQUE INDEX "CarVersion_modelId_name_key" ON "CarVersion"("modelId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Province_code_key" ON "Province"("code");

-- CreateIndex
CREATE INDEX "District_provinceId_idx" ON "District"("provinceId");

-- CreateIndex
CREATE UNIQUE INDEX "District_provinceId_code_key" ON "District"("provinceId", "code");

-- CreateIndex
CREATE UNIQUE INDEX "listings_slug_key" ON "listings"("slug");

-- CreateIndex
CREATE INDEX "listings_userId_idx" ON "listings"("userId");

-- CreateIndex
CREATE INDEX "listings_status_idx" ON "listings"("status");

-- CreateIndex
CREATE INDEX "listings_brandId_idx" ON "listings"("brandId");

-- CreateIndex
CREATE INDEX "listings_modelId_idx" ON "listings"("modelId");

-- CreateIndex
CREATE INDEX "listings_provinceId_idx" ON "listings"("provinceId");

-- CreateIndex
CREATE INDEX "listings_districtId_idx" ON "listings"("districtId");

-- CreateIndex
CREATE INDEX "listings_year_idx" ON "listings"("year");

-- CreateIndex
CREATE INDEX "listings_createdAt_idx" ON "listings"("createdAt");

-- CreateIndex
CREATE INDEX "listings_publishedAt_idx" ON "listings"("publishedAt");

-- CreateIndex
CREATE INDEX "listings_deletedAt_idx" ON "listings"("deletedAt");

-- CreateIndex
CREATE INDEX "listings_status_publishedAt_idx" ON "listings"("status", "publishedAt");

-- CreateIndex
CREATE INDEX "listings_brandId_modelId_idx" ON "listings"("brandId", "modelId");

-- CreateIndex
CREATE INDEX "listings_provinceId_districtId_idx" ON "listings"("provinceId", "districtId");

-- AddForeignKey
ALTER TABLE "CarSpecification" ADD CONSTRAINT "CarSpecification_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "listings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListingImage" ADD CONSTRAINT "ListingImage_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "listings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "listings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportListing" ADD CONSTRAINT "ReportListing_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "listings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportListing" ADD CONSTRAINT "ReportListing_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportListing" ADD CONSTRAINT "ReportListing_resolvedById_fkey" FOREIGN KEY ("resolvedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "listing_histories" ADD CONSTRAINT "listing_histories_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "listings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "listing_histories" ADD CONSTRAINT "listing_histories_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "listing_boosts" ADD CONSTRAINT "listing_boosts_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "listings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "listing_boosts" ADD CONSTRAINT "listing_boosts_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "boost_packages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "listing_boosts" ADD CONSTRAINT "listing_boosts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarModel" ADD CONSTRAINT "CarModel_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarVersion" ADD CONSTRAINT "CarVersion_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "CarModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "listings" ADD CONSTRAINT "listings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "listings" ADD CONSTRAINT "listings_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "listings" ADD CONSTRAINT "listings_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "CarModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "listings" ADD CONSTRAINT "listings_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "CarVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "listings" ADD CONSTRAINT "listings_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "listings" ADD CONSTRAINT "listings_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "listings" ADD CONSTRAINT "listings_approvedById_fkey" FOREIGN KEY ("approvedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
