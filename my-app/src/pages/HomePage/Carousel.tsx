import React from 'react';
import MovieCard from "../Components/MovieCard";
import { Movie } from "../Components/MovieList";

interface CarouselProps {
    movies: Movie[];
}

const Carousel = ({movies}:CarouselProps) => {
    return(
        <div className="carousel">
        {movies.map((movie) => (
            <MovieCard
                key={movie.id}
                title={movie.title}
                image={movie.image}
                description={movie.description}
            />
        ))}
    </div>
    )
}
  
export default Carousel;