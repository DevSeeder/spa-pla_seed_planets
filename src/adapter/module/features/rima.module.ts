import { Module } from '@nestjs/common';
import { RimaRepository } from '../../repository/features/rima.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Rima, RimaSchema } from 'src/domain/schema/rima.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rima.name, schema: RimaSchema }])
  ],
  controllers: [],
  providers: [RimaRepository],
  exports: [RimaRepository]
})
export class RimaModule {}
