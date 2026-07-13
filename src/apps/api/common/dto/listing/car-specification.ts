import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  BodyType,
  CarCondition,
  DriveType,
  ExteriorColor,
  FuelType,
  InteriorColor,
  SteeringPosition,
  Transmission,
} from '@prisma/client';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, Min } from 'class-validator';

export class CarSpecificationDto {
  @ApiProperty({ enum: BodyType })
  @IsEnum(BodyType)
  bodyType: BodyType;

  @ApiProperty({ enum: Transmission })
  @IsEnum(Transmission)
  transmission: Transmission;

  @ApiProperty({ enum: FuelType })
  @IsEnum(FuelType)
  fuelType: FuelType;

  @ApiProperty({ enum: DriveType })
  @IsEnum(DriveType)
  driveType: DriveType;

  @ApiProperty({ enum: CarCondition })
  @IsEnum(CarCondition)
  condition: CarCondition;

  @ApiProperty({ enum: ExteriorColor })
  @IsEnum(ExteriorColor)
  exteriorColor: ExteriorColor;

  @ApiProperty({ enum: InteriorColor })
  @IsEnum(InteriorColor)
  interiorColor: InteriorColor;

  @ApiProperty({ enum: SteeringPosition })
  @IsEnum(SteeringPosition)
  steeringPosition: SteeringPosition;

  @ApiProperty({ example: 5 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  seats: number;

  @ApiProperty({ example: 4 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  doors: number;

  @ApiPropertyOptional({
    example: 1498,
    description: 'Dung tích động cơ (cc)',
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  engineCapacity?: number;

  @ApiPropertyOptional({
    example: 107,
    description: 'Công suất (HP)',
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  horsepower?: number;
}
