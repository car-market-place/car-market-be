import { ApiProperty } from '@nestjs/swagger';

export class ListingResponseDto {
  @ApiProperty({
    example: 'clx123456',
  })
  id: string;

  @ApiProperty({
    example: 'Toyota Vios 2022',
  })
  title: string;

  @ApiProperty({
    example: 450000000,
  })
  price: number;

  @ApiProperty({
    example: 2022,
  })
  year: number;

  @ApiProperty({
    example: 'AUTOMATIC',
  })
  transmission: string;

  @ApiProperty({
    example: 'Toyota',
  })
  brandName: string;
}
