import { Document } from 'mongoose';

export interface AvgDirectorRating extends Document {
  readonly avgImdbRating: Number;
  readonly avgTomatoesRating: Number;
}
