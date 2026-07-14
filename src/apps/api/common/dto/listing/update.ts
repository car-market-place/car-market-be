import { PartialType } from '@nestjs/swagger';
import { CreateListingDto } from './create';

export class UpdateListingDto extends PartialType(CreateListingDto) {}
