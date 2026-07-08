import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsInt, IsOptional, IsString, IsUrl, MaxLength, Min } from 'class-validator';

export class CreateListingImageDto {
  @ApiProperty({
    example: 'https://cdn.example.com/listings/abc123/front.jpg',
  })
  @IsUrl()
  imageUrl: string;

  @ApiPropertyOptional({
    example: 'listing/abc123/front',
    description: 'Cloudinary/S3 public id',
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  publicId?: string;

  @ApiPropertyOptional({
    default: false,
  })
  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  isPrimary?: boolean = false;

  @ApiPropertyOptional({
    default: 0,
    description: 'Thứ tự hiển thị',
  })
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(0)
  sortOrder?: number = 0;
}
