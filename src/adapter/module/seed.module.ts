import { Module } from '@nestjs/common';
import { SeedCraterService } from 'src/application/service/seed/seed-crater.service';
import { MoonCraterSearcher } from '../searcher/crater/moon-crater.searcher';
import { PuppeteerService } from 'src/application/service/puppeteer/puppeteer.service';
import { CraterModule } from './crater.module';
import { CraterController } from '../controller/crater.controller';

@Module({
  imports: [CraterModule],
  controllers: [CraterController],
  providers: [SeedCraterService, MoonCraterSearcher, PuppeteerService],
  exports: [SeedCraterService, MoonCraterSearcher, PuppeteerService]
})
export class SeedModule {}
