import { filterData } from '../data/data';
import CategoryItem from './CategoryItem';
import Pagination from './Pagination';
import Button from './UI/Button';

const Filter = () => {
  return (
    <div className=" text-stone-100 p-4 border-2 bg-stone-500  rounded-md h-min w-1/5">
      <h2 className="text-xl mb-6">Фильтры:</h2>
      <form className="flex flex-col mb-2">
      <Button classes='mb-4' type='reset' handler=''>Сбросить все фильтры</Button>
        <label className="mb-2">
          Сортировать по:
          <select className="block w-full p-2 rounded text-slate-800 mt-4">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </label>
        <label className="mb-2">
          Год релиза:
          <select className="block w-full p-2 rounded text-slate-800 mt-4">
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option selected value="2021">
              2021
            </option>
          </select>
        </label>
        <div className="flex flex-col mb-2">
          {filterData.map(item => {
            return <CategoryItem key={item.id} category={item.name} />;
          })}
          {/* <CategoryItem category="Боевик" />
          <CategoryItem category="Приключение" />
          <CategoryItem category="Мультфильм" />
          <CategoryItem category="Вестерн" />
          <CategoryItem category="Комедия" /> */}
        </div>
      </form>
      <Pagination />
    </div>
  );
};

export default Filter;
