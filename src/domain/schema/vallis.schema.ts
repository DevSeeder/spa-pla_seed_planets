/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Feature } from './feature.schema';

export type VallisDocument = Vallis & Document;

@Schema({ timestamps: true, collection: 'features' })
export class Vallis extends Feature {
  @Prop({ required: false })
  diameter: number;

  @Prop({ required: false })
  idMainVallis: string;
}

const schema = SchemaFactory.createForClass(Vallis);

schema.index(
  { name: 1, wikiId: 1, wikiTable: 1, featureType: 1 },
  { unique: true }
);

export const VallisSchema = schema;
