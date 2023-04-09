import { Module } from '@nestjs/common';
import { MonsRepository } from '../../repository/features/mons.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Mons, MonsSchema } from 'src/domain/schema/mons.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Mons.name, schema: MonsSchema }])
  ],
  controllers: [],
  providers: [MonsRepository],
  exports: [MonsRepository]
})
export class MonsModule {}
