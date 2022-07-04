import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface IMovieCardProps {
  rating: number;
  name: string;
  src: string;
  id: number;
}

const MovieCard: React.FC<IMovieCardProps> = ({ src, name, rating, id }) => {
  const isAuthorized = useSelector((state: RootState) => state.isAuthorized);
  const dispatch = useDispatch();

  return (
    <div className="flex  bg-stone-200 rounded-md overflow-hidden shadow-2xl h-72 min-h-72">
      <img src={src} className="w-2/5 object-cover  " />
      <div className="p-4 flex flex-col w-full">
        <div className="flex justify-between mb-6">
          <p className="mr-6">
            Рейтинг:
            <span className="font-lg ml-2 font-semibold text-amber-600">
              {rating}
            </span>{' '}
          </p>
          <div className="flex">
            <img
              className="w-6 mr-6 cursor-pointer"
              src="src/img/star.svg"
              alt=""
              onClick={
                isAuthorized
                  ? undefined
                  : () => dispatch({ type: 'toggleModal' })
              }
            />
            <img
              className="w-6 cursor-pointer"
              src="src/img/bookmark.svg"
              alt=""
              onClick={
                isAuthorized
                  ? undefined
                  : () => dispatch({ type: 'toggleModal' })
              }
            />
          </div>
        </div>
        <p className="font-semibold">{name}</p>
        <Link className="mt-auto inline-block" to={`${id}`}>
          <button className="mt-auto inline-block w-min text-amber-600 hover:text-stone-600">
            Подробнее
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
