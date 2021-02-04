import * as mongoose from 'mongoose';

export const MovieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  runtime: Number,
  released: Date,
  poster: String,
  plot: String,
  fullplot: String,
  lastupdated: Date,
  directors: [{ type: String }],
  imdb: {
    rating: Number,
    votes: Number,
    id: Number,
  },
  countries: [{ type: String }],
  genres: [{ type: String }],
  tomatoes: {
    viewer: {
      rating: Number,
      numReviews: Number,
    },
    lastUpdated: Date,
  },
  num_mflix_comments: Number,
});
