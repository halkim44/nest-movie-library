// ./src/movie/movie.controller.ts
import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  Query,
  NotFoundException,
  Delete,
  Param,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDTO } from './dto/create-movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  // add a movie
  @Post('/create')
  async addMovie(@Res() res, @Body() createMovieDTO: CreateMovieDTO) {
    const movie = await this.movieService.addMovie(createMovieDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Movie has been created successfully',
      movie,
    });
  }

  // Retrieve movies list
  @Get('all')
  async getAllMovie(@Res() res) {
    const movies = await this.movieService.getAllMovie();
    return res.status(HttpStatus.OK).json(movies);
  }

  // Fetch a particular movie using ID
  @Get('/:movieID')
  async getMovie(@Res() res, @Param('movieID') movieID) {
    const movie = await this.movieService.getMovie(movieID);
    if (!movie) throw new NotFoundException('Movie does not exist!');
    return res.status(HttpStatus.OK).json(movie);
  }
  // Update a movie's details
  @Put('/update')
  async updateMovie(
    @Res() res,
    @Query('movieID') movieID,
    @Body() createMovieDTO: CreateMovieDTO,
  ) {
    const movie = await this.movieService.updateMovie(movieID, createMovieDTO);
    if (!movie) throw new NotFoundException('Movie does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Movie has been successfully updated',
      movie,
    });
  }

  // Delete a movie
  @Delete('/delete')
  async deleteMovie(@Res() res, @Query('movieID') movieID) {
    const movie = await this.movieService.deleteMovie(movieID);
    if (!movie) throw new NotFoundException('Movie does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Movie has been deleted',
      movie,
    });
  }
}
