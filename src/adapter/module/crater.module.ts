import { Module } from '@nestjs/common';
import { CraterRepository } from '../repository/crater.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Crater, CratersSchema } from 'src/domain/schema/crater.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Crater.name, schema: CratersSchema }])
  ],
  controllers: [],
  providers: [CraterRepository],
  exports: [CraterRepository]
})
export class CraterModule {}
