import { Module } from '@nestjs/common';
import { SinusRepository } from '../../repository/features/sinus.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Sinus, SinusSchema } from 'src/domain/schema/sinus.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sinus.name, schema: SinusSchema }])
  ],
  controllers: [],
  providers: [SinusRepository],
  exports: [SinusRepository]
})
export class SinusModule {}
