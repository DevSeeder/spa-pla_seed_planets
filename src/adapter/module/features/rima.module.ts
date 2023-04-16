import { Module } from '@nestjs/common';
import { RimaRepository } from '../../repository/features/rima.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Rima, RimaSchema } from 'src/domain/schema/rima.schema';
import { SeedRimaService } from 'src/application/service/seed/features/seed-rima.service';
import { MoonRimaSearcher } from 'src/adapter/searcher/planetary-names/features/moon-rima.searcher';
import { PuppeteerModule } from '../puppeteer.module';

@Module({
  imports: [
    PuppeteerModule,
    MongooseModule.forFeature([{ name: Rima.name, schema: RimaSchema }])
  ],
  controllers: [],
  providers: [RimaRepository, SeedRimaService, MoonRimaSearcher],
  exports: [RimaRepository, SeedRimaService, MoonRimaSearcher]
})
export class RimaModule {}
