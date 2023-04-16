import { Module } from '@nestjs/common';
import { RupesRepository } from '../../repository/features/rupes.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Rupes, RupesSchema } from 'src/domain/schema/rupes.schema';
import { SeedRupesService } from 'src/application/service/seed/features/seed-rupes.service';
import { MoonRupesSearcher } from 'src/adapter/searcher/planetary-names/features/moon-rupes.searcher';
import { PuppeteerModule } from '../puppeteer.module';

@Module({
  imports: [
    PuppeteerModule,
    MongooseModule.forFeature([{ name: Rupes.name, schema: RupesSchema }])
  ],
  controllers: [],
  providers: [RupesRepository, SeedRupesService, MoonRupesSearcher],
  exports: [RupesRepository, SeedRupesService, MoonRupesSearcher]
})
export class RupesModule {}
