import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsInt, IsString, Min, ValidateNested } from 'class-validator';

class ListingImageOrderItemDto {
  @ApiProperty({
    example: 'cmckrj6ci0001x9m5gwh4e1fa',
  })
  @IsString()
  id: string;

  @ApiProperty({
    example: 0,
  })
  @Type(() => Number)
  @IsInt()
  @Min(0)
  sortOrder: number;
}

export class ReorderListingImageDto {
  @ApiProperty({
    type: [ListingImageOrderItemDto],
  })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ListingImageOrderItemDto)
  images: ListingImageOrderItemDto[];
}
