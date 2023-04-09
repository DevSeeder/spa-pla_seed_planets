import { Module } from '@nestjs/common';
import { CraterRepository } from '../../repository/features/crater.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Crater, CraterSchema } from 'src/domain/schema/crater.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Crater.name, schema: CraterSchema }])
  ],
  controllers: [],
  providers: [CraterRepository],
  exports: [CraterRepository]
})
export class CraterModule {}
