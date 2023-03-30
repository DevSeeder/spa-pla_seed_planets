import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SeedCraterService } from 'src/application/service/seed-crater.service';
import { Crater, CratersSchema } from 'src/domain/schema/crater.schema';
import { CraterRepository } from '../repository/crater.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Crater.name, schema: CratersSchema }])
  ],
  controllers: [],
  providers: [SeedCraterService, CraterRepository],
  exports: []
})
export class CardModule {}
