import { ApiResponseDoc } from '@/apps/api/common/decorators/api-response';
import { CurrentUser } from '@/apps/api/common/decorators/user';
import { JwtUserDto } from '@/apps/api/common/dto/auth/user';
import { CreateListingDto } from '@/apps/api/common/dto/listing';
import { ListingResponseDto } from '@/apps/api/common/dto/listing/listing-response';
import { QueryListingDto } from '@/apps/api/common/dto/listing/pagination';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ListingService } from './listing.service';

@ApiTags('Listing')
@Controller('listing')
export class ListingController {
  constructor(private listingService: ListingService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  @ApiResponseDoc(ListingResponseDto)
  async create(@CurrentUser() user: JwtUserDto, @Body() dto: CreateListingDto) {
    return this.listingService.createListing(user.sub, dto);
  }

  @Post('all')
  @UseGuards(JwtAuthGuard)
  async getAll(@CurrentUser() user: JwtUserDto, @Body() query: QueryListingDto) {
    return this.listingService.findAll(query);
  }

  @Get('details')
  @UseGuards(JwtAuthGuard)
  async getDetails(@CurrentUser() user: JwtUserDto) {
    return this.listingService.getListingById(user.sub);
  }
}
