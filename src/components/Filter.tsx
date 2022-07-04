import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import filterData from '../data/data';
import { RootState } from '../store/store';
import CategoryItem from './CategoryItem';
import Pagination from './Pagination';
import Button from './UI/Button';

const Filter: React.FC = () => {
  const isAuthorized = useSelector((state: RootState) => state.isAuthorized);
  const dispatch = useDispatch();
  const defaultSorting = useSelector(
    (state: RootState) => state.defaultSorting
  );
  const defaultYear = useSelector((state: RootState) => state.defaultYear);
  const [selectedYear, setSelectedYear] = useState(defaultYear);
  const filteredMovies = useSelector((state: RootState) => state.genres);
  const [selectedSorting, setSelectedSorting] = useState(defaultSorting);

  const setToDefault = (e: React.FormEvent<HTMLFormElement>) => {
    setSelectedYear(defaultYear);
    setSelectedSorting(defaultSorting);
    dispatch({ type: defaultSorting });
    dispatch({ type: 'sortByYear', payload: defaultYear });
    dispatch({ type: 'resetFiltered' });
  };
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isAlreadyAdded = filteredMovies.some((item: number) => {
      return item === +e.target.id;
    });

    if (isAlreadyAdded) {
      if (filteredMovies.length === 1) {
        dispatch({ type: 'sortByYear', payload: defaultYear });
        dispatch({ type: selectedSorting });
      }
      dispatch({ type: 'removeFromFiltered', payload: +e.target.id });
    } else {
      dispatch({ type: 'addToFiltered', payload: +e.target.id });
    }

    dispatch({ type: 'sortByYear', payload: defaultYear });
    dispatch({ type: selectedSorting });
    dispatch({ type: 'filter' });
  };

  useEffect(() => {
    dispatch({ type: defaultSorting });
    dispatch({ type: 'sortByYear', payload: defaultYear });
  }, []);

  const sort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: `sortBy${e.target.value}` });
    setSelectedSorting(e.target.value);
    dispatch({ type: 'sortByYear', payload: selectedYear });
    dispatch({ type: 'filter' });
  };
  const filterByDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: `sortByYear`, payload: e.target.value });
    setSelectedYear(e.target.value);
    dispatch({ type: 'filter' });
  };

  const authorizedUserSelect = (
    <select className="block w-full p-2 rounded text-slate-800 mt-4 mb-4">
      <option value="PopularityDown">Смотреть позже</option>
      <option value="PopularityUp">Избранные</option>
    </select>
  );

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
            value={selectedSorting}
            onChange={sort}
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
            defaultValue={selectedYear}
            value={selectedYear}
            onChange={filterByDate}
            className="block w-full p-2 rounded text-slate-800 mt-4">
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
                handleOnChange={handleFilter}
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
