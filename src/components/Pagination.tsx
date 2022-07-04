import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import Button from './UI/Button';

const Pagination: React.FC = () => {
  const movies = useSelector((state: RootState) => state.outputMovies);
  const moviesPerPage = useSelector((state: RootState) => state.moviesPerPage);
  const currentPage = useSelector((state: RootState) => state.currentPage);
  const totalPages = Math.ceil(movies.length / moviesPerPage);
  const dispatch = useDispatch();

  const handlePageIncrement = () => {
    dispatch({ type: 'incrementPage' });
  };
  const handlePageDecrement = () => {
    dispatch({ type: 'decrementPage' });
  };
  return (
    <div>
      <div className="flex justify-evenly mb-2">
        <Button
          handler={handlePageDecrement}
          classes=""
          disabled={currentPage === 1}
          type="button">
          Назад
        </Button>
        <Button
          handler={handlePageIncrement}
          classes=""
          disabled={currentPage === totalPages}
          type="button">
          Вперед
        </Button>
      </div>
      <p className="text-center">
        {currentPage} of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;
