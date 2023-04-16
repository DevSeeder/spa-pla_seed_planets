/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Feature } from './feature.schema';

export type LacusDocument = Lacus & Document;

@Schema({ timestamps: true, collection: 'features' })
export class Lacus extends Feature {
  @Prop({ required: false })
  diameter: number;

  @Prop({ required: false })
  origin: string;
}

const schema = SchemaFactory.createForClass(Lacus);

schema.index(
  { name: 1, wikiId: 1, wikiTable: 1, featureType: 1 },
  { unique: true }
);

export const LacusSchema = schema;
