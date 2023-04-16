import { Module } from '@nestjs/common';
import { MonsRepository } from '../../repository/features/mons.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Mons, MonsSchema } from 'src/domain/schema/mons.schema';
import { SeedMonsService } from 'src/application/service/seed/features/seed-mons.service';
import { MoonMonsSearcher } from 'src/adapter/searcher/planetary-names/features/moon-mons.searcher';
import { PuppeteerModule } from '../puppeteer.module';
import { MonsHeightSearcher } from 'src/adapter/searcher/wikiwand/mons-height-searcher.searcher';

@Module({
  imports: [
    PuppeteerModule,
    MongooseModule.forFeature([{ name: Mons.name, schema: MonsSchema }])
  ],
  controllers: [],
  providers: [
    MonsRepository,
    SeedMonsService,
    MoonMonsSearcher,
    MonsHeightSearcher
  ],
  exports: [
    MonsRepository,
    SeedMonsService,
    MoonMonsSearcher,
    MonsHeightSearcher
  ]
})
export class MonsModule {}
