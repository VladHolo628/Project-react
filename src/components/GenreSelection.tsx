import filterData from '../data/data';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

const GenreSelection = () => {
  const dispatch = useDispatch();
  const selectedGenres = useSelector(
    (state: RootState) => state.genresToSearch
  );
  const options = filterData.map(item => {
    return {
      value: item.id,
      label: item.name[0].toUpperCase() + item.name.substring(1),
    };
  });

  const selectedValue = selectedGenres;
  const handleOnChange = selected => {
    dispatch({ type: 'setGenresToSearch', payload: selected });
  };
  return (
    <form className="w-full flex flex-col items-center">
      <Select
        options={options}
        isMulti
        placeholder="Один или несколько жанров"
        defaultValue={selectedValue}
        onChange={handleOnChange}
        isSearchable={false}
        className="w-full"></Select>
    </form>
  );
};

export { GenreSelection };
