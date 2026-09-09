import { Component, OnInit } from '@angular/core';
import { MovieInfoService } from '../services/movie-info';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.page.html',
  styleUrls: ['./featured.page.scss'],
  standalone: false,
})
export class FeaturedPage implements OnInit {
  movies: Movie[] = [];

  constructor(private movieInfoService: MovieInfoService) { }

  ngOnInit() {
    this.movies = this.movieInfoService.getMovies();
  }

}
