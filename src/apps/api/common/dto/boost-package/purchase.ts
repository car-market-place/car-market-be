import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class PurchaseBoostPackageDto {
  @ApiProperty({
    example: 'cmckrj6ci0001x9m5gwh4e1fa',
    description: 'Listing ID',
  })
  @IsString()
  listingId: string;

  @ApiProperty({
    example: 'cmd1x2y3z00001234abcd5678',
    description: 'Boost Package ID',
  })
  @IsString()
  boostPackageId: string;
}
