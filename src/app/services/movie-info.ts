import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Injectable({
    providedIn: 'root'
})

export class MovieInfoService {
    private movies: Movie[] = [
        {
            id: 1,
            title: 'Demon Slayer: Infinity Castle',
            genre: 'Action, Adventure, Fantasy',
            synopsis: 'The story follows Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered by demons and his sister Nezuko is turned into a demon. In this installment, Tanjiro and his friends face new challenges as they confront powerful demons in the Infinity Castle.',
            movieBanner: 'assets/movies/Demon Slayer.png',
            movieGallery: [
                'assets/movies/gallery1.jpeg',
                'assets/movies/gallery2.jpeg',
                'assets/movies/gallery4.jpeg'
            ]
        },
        {
            id: 2,
            title: 'One Piece Film: Strong World',
            genre: 'Action, Adventure, Fantasy',
            synopsis: 'A powerful and ruthless pirate named Gold Golem Shiki plans to remake the world map by tearing continents apart, forcing the Straw Hat crew into a desperate fight to save their friends and stop his plan.',
            movieBanner: 'assets/movies/Strong World.jpeg',
            movieGallery: [
                'assets/movies/gallery8.jpeg',
                'assets/movies/gallery9.jpeg',
                'assets/movies/gallery10.jpeg'
            ]
        },
        {
            id: 3,
            title: 'Jujutsu Kaisen 0',
            genre: 'Action, Fantasy, Horror',
            synopsis: 'Yuta Okkotsu, a frightened high schooler haunted by his childhood friend\'s vengeful spirit, enrolls at Tokyo Jujutsu High to learn to control his curse, ultimately facing a powerful sorcerer bent on destroying the world.',
            movieBanner: 'assets/movies/Jujutsu K.jpeg',
            movieGallery: [
                'assets/movies/gallery5.jpeg',
                'assets/movies/gallery6.jpeg',
                'assets/movies/gallery7.jpeg'
            ]
        }
    ];

    constructor() { }

    getMovies(): Movie[] {
        return this.movies;
    }

    getMovieById(id: number): Movie | undefined {
        return this.movies.find(movie => movie.id === id);
    }
}