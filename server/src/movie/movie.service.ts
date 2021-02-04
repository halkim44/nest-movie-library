import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './interfaces/movie.interface';
import { Model } from 'mongoose';
import { CreateMovieDTO } from './dto/create-movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel('Movie') private readonly movieModel: Model<Movie>,
  ) {}

  // fetch all movies
  async getAllMovie(): Promise<Movie[]> {
    const movies = await this.movieModel.find().exec();
    return movies;
  }
  // Get a single movie
  async getMovie(movieID): Promise<Movie> {
    const movie = await this.movieModel.findById(movieID).exec();
    return movie;
  }
  // post a single movie
  async addMovie(createMovieDTO: CreateMovieDTO): Promise<Movie> {
    const newMovie = await new this.movieModel(createMovieDTO);
    return newMovie.save();
  }
  // Edit movie details
  async updateMovie(movieID, createMovieDTO: CreateMovieDTO): Promise<Movie> {
    const updatedMovie = await this.movieModel.findByIdAndUpdate(
      movieID,
      createMovieDTO,
      { new: true },
    );
    return updatedMovie;
  }
  // Delete a movie
  async deleteMovie(movieID): Promise<any> {
    const deletedMovie = await this.movieModel.findByIdAndRemove(movieID);
    return deletedMovie;
  }
}
