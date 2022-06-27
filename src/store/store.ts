import { createStore } from 'redux';
import data from './data';

interface moviesItem {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface RootState {
  movies: moviesItem[];
  sortedMovies: moviesItem[];
  filteredMovies: any;
  genres: number[];
  outputMovies: moviesItem[];
  moviesPerPage: number;
  currentPage: number;
  defaultSorting: string;
  defaultYear: string;
}

const initialState: RootState = {
  movies: data,
  sortedMovies: [],
  filteredMovies: [],
  genres: [],
  outputMovies: [],
  moviesPerPage: 10,
  currentPage: 1,
  defaultSorting: 'sortByPopularityDown',
  defaultYear: '2020',
};

const moviesReducer = (
  state = initialState,
  action: { type: string; payload?: {} }
) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'setMoviesList':
      return {
        ...newState,
        movies: action.payload,
      };
      break;
    case 'incrementPage':
      return {
        ...newState,
        currentPage: newState.currentPage + 1,
      };
      break;
    case 'decrementPage':
      return {
        ...newState,
        currentPage: newState.currentPage - 1,
      };
      break;

    case 'sortByVotesUp': {
      const sorted = newState.movies.sort(
        (a, b) => a.vote_average - b.vote_average
      );
      return {
        ...newState,
        sortedMovies: sorted,
        outputMovies: sorted,
      };
    }
    case 'sortByVotesDown': {
      const sorted = newState.movies.sort(
        (a, b) => b.vote_average - a.vote_average
      );
      return {
        ...newState,
        sortedMovies: sorted,
        outputMovies: sorted,
      };
    }
    case 'sortByPopularityDown': {
      let sorted = newState.movies.sort((a, b) => b.popularity - a.popularity);
      return {
        ...newState,
        sortedMovies: sorted,
        outputMovies: sorted,
      };
    }
    case 'sortByPopularityUp': {
      let sorted = newState.movies.sort((a, b) => a.popularity - b.popularity);
      return {
        ...newState,
        sortedMovies: sorted,
        outputMovies: sorted,
      };
    }

    case 'sortByYear':
      return {
        ...newState,
        outputMovies: newState.sortedMovies.filter(item => {
          return item.release_date.includes(action.payload);
        }),
      };

    case 'addToFiltered':
      return {
        ...newState,
        genres: [...newState.genres, action.payload],
      };
    case 'removeFromFiltered':
      return {
        ...newState,
        genres: newState.genres.filter((item: number) => {
          return item !== action.payload;
        }),
      };
    case 'resetFiltered':
      return {
        ...newState,
        genres: [],
      };
    case 'filter':
      if (newState.genres.length === 0) return newState;
      return {
        ...newState,
        outputMovies: newState.outputMovies.filter(movie => {
          return newState.genres.every(val => movie.genre_ids.includes(val));
        }),
      };
    default:
      return newState;
  }
};
const store = createStore(moviesReducer);
export default store;
