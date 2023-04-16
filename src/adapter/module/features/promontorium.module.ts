import { Module } from '@nestjs/common';
import { PromontoriumRepository } from '../../repository/features/promontorium.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Promontorium,
  PromontoriumSchema
} from 'src/domain/schema/promontorium.schema';
import { SeedPromontoriumService } from 'src/application/service/seed/features/seed-promontorium.service';
import { MoonPromontoriumSearcher } from 'src/adapter/searcher/planetary-names/features/moon-promontorium.searcher';
import { PuppeteerModule } from '../puppeteer.module';

@Module({
  imports: [
    PuppeteerModule,
    MongooseModule.forFeature([
      { name: Promontorium.name, schema: PromontoriumSchema }
    ])
  ],
  controllers: [],
  providers: [
    PromontoriumRepository,
    SeedPromontoriumService,
    MoonPromontoriumSearcher
  ],
  exports: [
    PromontoriumRepository,
    SeedPromontoriumService,
    MoonPromontoriumSearcher
  ]
})
export class PromontoriumModule {}
