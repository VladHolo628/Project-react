import { createStore } from 'redux';
import data from './data';

export interface moviesItem {
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
  outputMovies: moviesItem[];
  moviesPerPage: number;
  currentPage: number;
  selectedSorting: string;
  selectedYear: string;
  selectedGenres:number[];
  genresToSearch: [];
  votesToSearch: 'high' | 'low';
  popularityToSearch: string;
  showModal: boolean;
  isAuthorized: boolean;
}

const initialState: RootState = {
  movies: data,
  outputMovies: [],
  moviesPerPage: 10,
  currentPage: 1,
  selectedSorting: 'PopularityDown',
  selectedYear: '2020',
  selectedGenres: [],
  genresToSearch: [],
  votesToSearch: 'high',
  popularityToSearch: 'high',
  showModal: false,
  isAuthorized: false,
};

const moviesReducer = (
  state = initialState,
  action: { type: string; payload?:any }
) => {
  const newState: RootState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'setGenresToSearch':
      return {
        ...newState,
        genresToSearch: action.payload,
      };
      break;
    case 'setVotesToSearch':
      return {
        ...newState,
        votesToSearch: action.payload,
      };
      break;
    case 'setPopularityToSearch':
      return {
        ...newState,
        popularityToSearch: action.payload,
      };
      break;
    case 'setMoviesList':
      return {
        ...newState,
        movies: action.payload,
      };
      break;
    case 'setOutputMovies':
      return {
        ...newState,
        outputMovies: action.payload,
      };
    case 'setSelectedSorting':
      return {
        ...newState,
        selectedSorting: action.payload,
      };
    case 'setSelectedYear':
      return {
        ...newState,
        selectedYear: action.payload,
      };

      case 'setSelectedGenres':
        return {
          ...newState,
          selectedGenres: action.payload,
        };
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
    case 'toggleModal':
      return {
        ...newState,
        showModal: !newState.showModal,
      };
    case 'toggleAuthorized':
      localStorage.setItem('isAuthorized', (!newState.isAuthorized).toString());
      return {
        ...newState,
        isAuthorized: !newState.isAuthorized,
      };
    default:
      return newState;
  }
};
const store = createStore(moviesReducer);
export default store;
