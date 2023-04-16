import { Module } from '@nestjs/common';
import { LandingSiteRepository } from '../../repository/features/landing-site.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  LandingSite,
  LandingSiteSchema
} from 'src/domain/schema/landing-site.schema';
import { SeedLandingSiteService } from 'src/application/service/seed/features/seed-landing-site.service';
import { MoonLandingSiteSearcher } from 'src/adapter/searcher/planetary-names/features/moon-landing-site.searcher';
import { PuppeteerModule } from '../puppeteer.module';

@Module({
  imports: [
    PuppeteerModule,
    MongooseModule.forFeature([
      { name: LandingSite.name, schema: LandingSiteSchema }
    ])
  ],
  controllers: [],
  providers: [
    LandingSiteRepository,
    SeedLandingSiteService,
    MoonLandingSiteSearcher
  ],
  exports: [
    LandingSiteRepository,
    SeedLandingSiteService,
    MoonLandingSiteSearcher
  ]
})
export class LandingSiteModule {}
