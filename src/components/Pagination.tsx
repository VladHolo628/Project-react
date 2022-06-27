import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import Button from './UI/Button';

const Pagination: React.FC = () => {
  const movies = useSelector((state: RootState) => state.movies);
  const moviesPerPage = useSelector((state: RootState) => state.moviesPerPage);
  const currentPage = useSelector((state: RootState) => state.currentPage);
  const totalPages = movies.length / moviesPerPage;
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
          disabled={currentPage === 1 ? true : false}
          type="button">
          Назад
        </Button>
        <Button
          handler={handlePageIncrement}
          classes=""
          disabled={currentPage === totalPages ? true : false}
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
