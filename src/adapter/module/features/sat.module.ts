import { Module } from '@nestjs/common';
import { PuppeteerModule } from '../puppeteer.module';
import { CraterModule } from './crater.module';
import { SeedSatService } from 'src/application/service/seed/features/seed-sat.service';
import { MoonSatSearcher } from 'src/adapter/searcher/planetary-names/features/moon-sat.searcher';

@Module({
  imports: [PuppeteerModule, CraterModule],
  controllers: [],
  providers: [SeedSatService, MoonSatSearcher],
  exports: [SeedSatService, MoonSatSearcher]
})
export class SatModule {}
