/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Feature } from './feature.schema';

export type PromontoriumDocument = Promontorium & Document;

@Schema({ timestamps: true, collection: 'features' })
export class Promontorium extends Feature {
  @Prop({ required: false })
  diameter: number;

  @Prop({ required: false })
  idMainPromontorium: string;
}

const schema = SchemaFactory.createForClass(Promontorium);

schema.index(
  { name: 1, wikiId: 1, wikiTable: 1, featureType: 1 },
  { unique: true }
);

export const PromontoriumSchema = schema;
