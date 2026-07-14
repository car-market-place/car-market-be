import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BodyType, DriveType, FuelType, Transmission } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateCarSpecificationDto {
  @ApiPropertyOptional({
    example: '2.0 Turbo I4',
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  engine?: string;

  @ApiPropertyOptional({
    example: 1998,
    description: 'Dung tích động cơ (cc)',
  })
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(0)
  engineCapacity?: number;

  @ApiPropertyOptional({
    example: 250,
  })
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(0)
  horsepower?: number;

  @ApiPropertyOptional({
    example: 350,
    description: 'Nm',
  })
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(0)
  torque?: number;

  @ApiProperty({
    enum: Transmission,
  })
  @IsEnum(Transmission)
  transmission: Transmission;

  @ApiProperty({
    enum: FuelType,
  })
  @IsEnum(FuelType)
  fuelType: FuelType;

  @ApiProperty({
    enum: BodyType,
  })
  @IsEnum(BodyType)
  bodyType: BodyType;

  @ApiPropertyOptional({
    enum: DriveType,
  })
  @IsOptional()
  @IsEnum(DriveType)
  driveType?: DriveType;

  @ApiPropertyOptional({
    example: 5,
  })
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(1)
  seats?: number;

  @ApiPropertyOptional({
    example: 4,
  })
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(2)
  doors?: number;

  @ApiPropertyOptional({
    example: 'Trắng ngọc trai',
  })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  colorExterior?: string;

  @ApiPropertyOptional({
    example: 'Đen',
  })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  colorInterior?: string;

  @ApiPropertyOptional({
    example: 7.2,
    description: 'Lít/100km',
  })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @IsPositive()
  fuelConsumption?: number;

  @ApiPropertyOptional({
    example: 240,
    description: 'km/h',
  })
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(0)
  topSpeed?: number;
}
