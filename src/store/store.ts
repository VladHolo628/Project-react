import { createStore } from 'redux';
import data from './data';

const initialState = {
  movies: data,
  sortedMovies: [],
  filteredMovies: [],
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
    default:
      return newState;
  }
};
const store = createStore(moviesReducer);
export default store;
