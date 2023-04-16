import { Module } from '@nestjs/common';
import { CraterModule } from './features/crater.module';
import { SeedController } from '../controller/seed.controller';
import { RimaModule } from './features/rima.module';
import { SinusModule } from './features/sinus.module';
import { RupesModule } from './features/rupes.module';
import { DorsaModule } from './features/dorsa.module';
import { MonsModule } from './features/mons.module';
import { CatenaModule } from './features/catena.module';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';
import { LacusModule } from './features/lacus.module';
import { PromontoriumModule } from './features/promontorium.module';
import { VallisModule } from './features/vallis.module';
import { MareModule } from './features/mare.module';
import { LandingSiteModule } from './features/landing-site.module';
import { SatModule } from './features/sat.module';

@Module({
  imports: [
    ConfigModule.forFeature(configuration),
    CraterModule,
    RimaModule,
    SinusModule,
    RupesModule,
    DorsaModule,
    MonsModule,
    CatenaModule,
    LacusModule,
    PromontoriumModule,
    VallisModule,
    MareModule,
    LandingSiteModule,
    SatModule
  ],
  controllers: [SeedController],
  providers: [],
  exports: []
})
export class SeedModule {}
