export class CreateMovieDTO {
  readonly title: String;
  readonly year: Number;
  readonly runtime: Number;
  readonly released: Date;
  readonly poster: String;
  readonly plot: String;
  readonly fullplot: String;
  readonly lastupdated: Date;
  readonly directors: [{ type: String }];
  readonly imdb: {
    rating: Number;
    votes: Number;
    id: Number;
  };
  readonly countries: [{ type: String }];
  readonly genres: [{ type: String }];
  readonly tomatoes: {
    viewer: {
      rating: Number;
      numReviews: Number;
    };
    lastUpdated: Date;
  };
  readonly num_mflix_comments: Number;
}
