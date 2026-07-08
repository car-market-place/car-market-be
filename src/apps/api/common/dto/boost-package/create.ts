import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsPositive, IsString, MaxLength } from 'class-validator';

export class CreateBoostPackageDto {
  @ApiProperty({
    example: 'VIP 30 ngày',
  })
  @IsString()
  @MaxLength(100)
  name: string;

  @ApiPropertyOptional({
    example: 'Tin được ưu tiên hiển thị trong 30 ngày.',
  })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string;

  @ApiProperty({
    example: 30,
  })
  @Type(() => Number)
  @IsPositive()
  durationDays: number;

  @ApiProperty({
    example: 199000,
  })
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({
    example: 100,
    description: 'Điểm ưu tiên khi sắp xếp',
  })
  @Type(() => Number)
  @IsPositive()
  boostScore: number;

  @ApiPropertyOptional({
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
