
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import MovieCard from './MovieCard';


const MovieList: React.FC = () => {


  const movies = useSelector((state: RootState) => state.outputMovies);
  const moviesPerPage = useSelector((state: RootState) => state.moviesPerPage);
  const currentPage = useSelector((state: RootState) => state.currentPage);

  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMovieIndex = lastMovieIndex - moviesPerPage;
  const currentMovies = movies.slice(firstMovieIndex, lastMovieIndex);

  return (
    <div className="grid grid-cols-2 auto-rows-auto gap-8 px-8 w-3/4 align-top mx-auto">
      {currentMovies.map(movie => {
        const imagePath = movie.poster_path || movie.backdrop_path;
        return (
          <MovieCard
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500/${imagePath}`}
            name={movie.title}
            rating={movie.vote_average}
            id={movie.id}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
