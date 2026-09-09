import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../interfaces/movie';
import { MovieInfoService } from '../services/movie-info';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
  standalone: false,
})
export class MovieDetailPage implements OnInit {
  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieInfoService: MovieInfoService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieInfoService.getMovieById(id);
  }

  goBack() {
    this.router.navigate(['/tabs/featured']);
  }

}