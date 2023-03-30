import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CardService } from 'src/application/service/crater/seed-crater.service';
import { Crater, CratersSchema } from 'src/domain/schema/crater.schema';
import { CraterRepository } from '../repository/crater.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Crater.name, schema: CratersSchema }])
  ],
  controllers: [],
  providers: [CardService, CraterRepository],
  exports: [CardService]
})
export class CardModule {}
