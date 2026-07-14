import { ApiPropertyOptional } from '@nestjs/swagger';
import { ListingStatus } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class ListingQueryDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  keyword?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  brandId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  modelId?: string;

  @ApiPropertyOptional()
  @Type(() => Number)
  @IsOptional()
  minPrice?: number;

  @ApiPropertyOptional()
  @Type(() => Number)
  @IsOptional()
  maxPrice?: number;

  @ApiPropertyOptional()
  @Type(() => Number)
  @IsOptional()
  minYear?: number;

  @ApiPropertyOptional()
  @Type(() => Number)
  @IsOptional()
  maxYear?: number;

  @ApiPropertyOptional({ enum: ListingStatus })
  @IsOptional()
  @IsEnum(ListingStatus)
  status?: ListingStatus;

  @ApiPropertyOptional({ default: 1 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  page = 1;

  @ApiPropertyOptional({ default: 20 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  limit = 20;
}
