import { Module } from '@nestjs/common';
import { CatenaRepository } from '../../repository/features/catena.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Catena, CatenaSchema } from 'src/domain/schema/catena.schema';
import { MoonCatenaSearcher } from 'src/adapter/searcher/planetary-names/features/moon-catena.searcher';
import { SeedCatenaService } from 'src/application/service/seed/features/seed-catena.service';
import { PuppeteerModule } from '../puppeteer.module';

@Module({
  imports: [
    PuppeteerModule,
    MongooseModule.forFeature([{ name: Catena.name, schema: CatenaSchema }])
  ],
  controllers: [],
  providers: [CatenaRepository, SeedCatenaService, MoonCatenaSearcher],
  exports: [CatenaRepository, SeedCatenaService, MoonCatenaSearcher]
})
export class CatenaModule {}
