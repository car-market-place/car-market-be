import { PartialType } from '@nestjs/swagger';
import { CreateListingImageDto } from './create';

export class UpdateListingImageDto extends PartialType(CreateListingImageDto) {}
