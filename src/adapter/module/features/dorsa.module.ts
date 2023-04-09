import { Module } from '@nestjs/common';
import { DorsaRepository } from '../../repository/features/dorsa.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Dorsa, DorsaSchema } from 'src/domain/schema/dorsa.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Dorsa.name, schema: DorsaSchema }])
  ],
  controllers: [],
  providers: [DorsaRepository],
  exports: [DorsaRepository]
})
export class DorsaModule {}
