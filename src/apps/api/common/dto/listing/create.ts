import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEmail,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { CarSpecificationDto } from './car-specification';

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
  year: number;

  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  mileage: number;

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  price: number;

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

  @ApiPropertyOptional({
    type: () => CarSpecificationDto,
  })
  @ValidateNested()
  @Type(() => CarSpecificationDto)
  @IsOptional()
  specification?: CarSpecificationDto;

  @ApiProperty()
  @IsDateString()
  expiredAt: string;
}
