import { Module } from '@nestjs/common';
import { SeedCraterService } from 'src/application/service/seed/seed-crater.service';
import { MoonCraterSearcher } from '../searcher/crater/moon-crater.searcher';
import { PuppeteerService } from 'src/application/service/puppeteer/puppeteer.service';

@Module({
  imports: [],
  controllers: [],
  providers: [SeedCraterService, MoonCraterSearcher, PuppeteerService],
  exports: []
})
export class SeedModule {}
