import { Module } from '@nestjs/common';
import { SeedCraterService } from 'src/application/service/seed/features/seed-crater.service';
import { MoonCraterSearcher } from '../searcher/planetary-names/features/moon-crater.searcher';
import { PuppeteerService } from 'src/application/service/puppeteer/puppeteer.service';
import { CraterModule } from './features/crater.module';
import { SeedController } from '../controller/seed.controller';
import { RimaModule } from './features/rima.module';
import { SeedRimaService } from 'src/application/service/seed/features/seed-rima.service';
import { MoonRimaSearcher } from '../searcher/planetary-names/features/moon-rima.searcher';
import { MoonSinusSearcher } from '../searcher/planetary-names/features/moon-sinus.searcher';
import { SeedSinusService } from 'src/application/service/seed/features/seed-sinus.service';
import { SinusModule } from './features/sinus.module';
import { RupesModule } from './features/rupes.module';
import { MoonRupesSearcher } from '../searcher/planetary-names/features/moon-rupes.searcher';
import { SeedRupesService } from 'src/application/service/seed/features/seed-rupes.service';
import { DorsaModule } from './features/dorsa.module';
import { SeedDorsaService } from 'src/application/service/seed/features/seed-dorsa.service';
import { MoonDorsaSearcher } from '../searcher/planetary-names/features/moon-dorsa.searcher';
import { MonsModule } from './features/mons.module';
import { SeedMonsService } from 'src/application/service/seed/features/seed-mons.service';
import { MoonMonsSearcher } from '../searcher/planetary-names/features/moon-mons.searcher';
import { MonsHeightSearcher } from '../searcher/wikiwand/mons-height-searcher.searcher';

@Module({
  imports: [
    CraterModule,
    RimaModule,
    SinusModule,
    RupesModule,
    DorsaModule,
    MonsModule
  ],
  controllers: [SeedController],
  providers: [
    SeedCraterService,
    SeedRimaService,
    SeedSinusService,
    SeedRupesService,
    SeedDorsaService,
    SeedMonsService,
    MoonCraterSearcher,
    MoonRimaSearcher,
    MoonSinusSearcher,
    MoonRupesSearcher,
    MoonDorsaSearcher,
    MoonMonsSearcher,
    MonsHeightSearcher,
    PuppeteerService
  ],
  exports: []
})
export class SeedModule {}
