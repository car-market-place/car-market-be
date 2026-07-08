import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BodyType, DriveType, FuelType, Transmission } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateListingDto {
  @ApiProperty()
  @IsUUID()
  brandId: string;

  @ApiProperty()
  @IsUUID()
  modelId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  versionId?: string;

  @ApiProperty()
  @IsUUID()
  provinceId: string;

  @ApiProperty()
  @IsUUID()
  districtId: string;

  @ApiProperty()
  @IsString()
  @MaxLength(200)
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  @Min(1950)
  @Max(new Date().getFullYear() + 1)
  year: number;

  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  mileage: number;

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({ enum: Transmission })
  @IsEnum(Transmission)
  transmission: Transmission;

  @ApiProperty({ enum: FuelType })
  @IsEnum(FuelType)
  fuelType: FuelType;

  @ApiProperty({ enum: BodyType })
  @IsEnum(BodyType)
  bodyType: BodyType;

  @ApiPropertyOptional({ enum: DriveType })
  @IsOptional()
  @IsEnum(DriveType)
  driveType?: DriveType;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  color?: string;

  @ApiPropertyOptional()
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  seats?: number;

  @ApiPropertyOptional()
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  doors?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty()
  @IsString()
  contactName: string;

  @ApiProperty()
  @IsString()
  contactPhone: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  contactEmail?: string;

  @ApiProperty()
  @IsDateString()
  expiredAt: string;
}
