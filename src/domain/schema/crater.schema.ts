/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Feature } from './feature.schema';

export type CraterDocument = Crater & Document;

@Schema({ timestamps: true, collection: 'features' })
export class Crater extends Feature {
  @Prop({ required: false })
  diameter: number;

  @Prop({ required: false })
  idMainCrater: string;
}

const schema = SchemaFactory.createForClass(Crater);
schema.index({ name: 1, wikiId: 1, wikiTable: 1 }, { unique: true });

export const CratersSchema = schema;
