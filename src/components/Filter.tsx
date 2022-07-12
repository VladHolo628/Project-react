import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import filterData from '../data/data';
import { RootState, moviesItem } from '../store/store';
import CategoryItem from './CategoryItem';
import Pagination from './Pagination';
import Button from './UI/Button';

const Filter: React.FC = () => {
  const isAuthorized = useSelector((state: RootState) => state.isAuthorized);
  const dispatch = useDispatch();
  const defaultSorting = useSelector(
    (state: RootState) => state.selectedSorting
  );
  const defaultYear = useSelector((state: RootState) => state.selectedYear);
  const genres = useSelector((state: RootState) => state.selectedGenres);
  const [selectedYear, setSelectedYear] = useState(defaultYear);
  const [selectedSorting, setSelectedSorting] = useState(defaultSorting);
  const [selectedGenres,setSelectedGenres] = useState<number[]>([])
  const movies = useSelector((state: RootState) => state.movies);

  const setToDefault = () => {
    setSelectedYear(defaultYear);
    setSelectedSorting(defaultSorting);
    dispatch({ type: defaultSorting });
    dispatch({ type: 'sortByYear', payload: defaultYear });
    dispatch({ type: 'resetFiltered' });
  };

  useEffect(() => {
    filterMovies();
  }, []);

  useEffect(() => {
    filterMovies();
    console.log(333)
  }, [selectedSorting,selectedYear,selectedGenres]);

  const filterMovies = () => {
    const filteredByYear = filterByYear(selectedYear);
    const filteredByGenres = filterByGenres(filteredByYear);
    const sortedMovies = sort(selectedSorting, filteredByGenres);

    dispatch({ type: 'setOutputMovies', payload: sortedMovies });
  };

  const sort = (sorting: string, movies: moviesItem[]) => {
    let output;
    switch (sorting) {
      case 'PopularityDown':
        output = movies.sort((a, b) => b.popularity - a.popularity);
        break;

      case 'PopularityUp':
        output = movies.sort((a, b) => a.popularity - b.popularity);
        break;

      case 'VotesDown':
        output = movies.sort((a, b) => b.vote_average - a.vote_average);
        break;

      case 'VotesUp':
        output = movies.sort((a, b) => a.vote_average - b.vote_average);
        break;

      default:
        output = movies;
    }
    return output;
  };

  const filterByYear = (year: string) => {
    const filtered = movies.filter(movie => movie.release_date.includes(year));
    return filtered;
  };

  const filterByGenres = (movies:moviesItem[]) => {
    if (selectedGenres.length === 0) return movies;

    const filteredByGenres = movies.filter(movie => {
      return selectedGenres.every(val => movie.genre_ids.includes(val));
    })

    return filteredByGenres
  }
  const handleFilterByGenres = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isAlreadyAdded = selectedGenres.some((item: number) => {
      return item === +e.target.id;
    });

    if(isAlreadyAdded){
      if(selectedGenres.length <= 1) {
        setSelectedGenres([])
        return
      }
      const filtered = selectedGenres.filter((item:number) => {
        return item !== +e.target.id
      })
      setSelectedGenres(filtered)
    } else {
      setSelectedGenres([...selectedGenres,+e.target.id])
    }

   
    dispatch({type:'setSelectedGenres', payload:selectedGenres})
    
  };

  const authorizedUserSelect = (
    <select className="block w-full p-2 rounded text-slate-800 mt-4 mb-4">
      <option value="PopularityDown">Смотреть позже</option>
      <option value="PopularityUp">Избранные</option>
    </select>
  );

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSorting(e.target.value);
    dispatch({ type: 'setSelectedSorting', payload: e.target.value });
  };


  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
    dispatch({ type: 'setSelectedYear', payload: e.target.value });
  };

  return (
    <div className=" text-stone-100 p-4 border-2 bg-stone-500  rounded-md h-min w-1/5">
      <h2 className="text-xl mb-6">Фильтры:</h2>
      <form onReset={setToDefault} className="flex flex-col mb-2">
        <Button classes="mb-4" type="reset">
          Сбросить все фильтры
        </Button>
        <label className="mb-2">
          Сортировать по:
          <select
            defaultValue={selectedSorting}
            onChange={handleSortChange}
            className="block w-full p-2 rounded text-slate-800 mt-4">
            <option value="PopularityDown">Популярные по убыванию</option>
            <option value="PopularityUp">Популярные по возрастанию</option>
            <option value="VotesDown">Рейтинг по убыванию</option>
            <option value="VotesUp">Рейтинг по возрастанию</option>
          </select>
        </label>
        <label className="mb-2">
          Год релиза:
          <select
            value={selectedYear}
            className="block w-full p-2 rounded text-slate-800 mt-4"
            onChange={handleYearChange}>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
          </select>
        </label>

        <div className="flex flex-col mb-2">
          {filterData.map(item => {
            return (
              <CategoryItem
                key={item.id}
                category={item.name}
                id={item.id}
                handleOnChange={handleFilterByGenres}
              />
            );
          })}
        </div>
        {isAuthorized ? authorizedUserSelect : null}
      </form>
      <Pagination />
    </div>
  );
};

export default Filter;
