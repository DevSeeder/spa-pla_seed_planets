import { Module } from '@nestjs/common';
import { RupesRepository } from '../../repository/features/rupes.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Rupes, RupesSchema } from 'src/domain/schema/rupes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rupes.name, schema: RupesSchema }])
  ],
  controllers: [],
  providers: [RupesRepository],
  exports: [RupesRepository]
})
export class RupesModule {}
