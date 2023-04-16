import { Module } from '@nestjs/common';
import { CraterRepository } from '../../repository/features/crater.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Crater, CraterSchema } from 'src/domain/schema/crater.schema';
import { SeedCraterService } from 'src/application/service/seed/features/seed-crater.service';
import { MoonCraterSearcher } from 'src/adapter/searcher/planetary-names/features/moon-crater.searcher';
import { PuppeteerModule } from '../puppeteer.module';

@Module({
  imports: [
    PuppeteerModule,
    MongooseModule.forFeature([{ name: Crater.name, schema: CraterSchema }])
  ],
  controllers: [],
  providers: [CraterRepository, SeedCraterService, MoonCraterSearcher],
  exports: [CraterRepository, SeedCraterService, MoonCraterSearcher]
})
export class CraterModule {}
