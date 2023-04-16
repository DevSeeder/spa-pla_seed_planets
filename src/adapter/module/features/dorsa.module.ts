import { Module } from '@nestjs/common';
import { DorsaRepository } from '../../repository/features/dorsa.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Dorsa, DorsaSchema } from 'src/domain/schema/dorsa.schema';
import { SeedDorsaService } from 'src/application/service/seed/features/seed-dorsa.service';
import { MoonDorsaSearcher } from 'src/adapter/searcher/planetary-names/features/moon-dorsa.searcher';
import { PuppeteerModule } from '../puppeteer.module';

@Module({
  imports: [
    PuppeteerModule,
    MongooseModule.forFeature([{ name: Dorsa.name, schema: DorsaSchema }])
  ],
  controllers: [],
  providers: [DorsaRepository, SeedDorsaService, MoonDorsaSearcher],
  exports: [DorsaRepository, SeedDorsaService, MoonDorsaSearcher]
})
export class DorsaModule {}
