/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Feature } from './feature.schema';

export type DorsaDocument = Dorsa & Document;

@Schema({ timestamps: true, collection: 'features' })
export class Dorsa extends Feature {
  @Prop({ required: false })
  diameter: number;
}

const schema = SchemaFactory.createForClass(Dorsa);

schema.index(
  { name: 1, wikiId: 1, wikiTable: 1, featureType: 1 },
  { unique: true }
);

export const DorsaSchema = schema;
