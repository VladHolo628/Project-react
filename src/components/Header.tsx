import Button from './UI/Button';
import HomeButton from './UI/HomeButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state: RootState) => state.isAuthorized);
  return (
    <div className="flex justify-between items-center bg-stone-900 px-6 py-4 shadow-xl">
      <Link to={'/'}>
        <HomeButton />
      </Link>

      {!isAuthorized ? (
        <Button
          type="button"
          classes=""
          handler={() => dispatch({ type: 'toggleModal' })}>
          Log In
        </Button>
      ) : (
        <Button
          type="button"
          classes=""
          handler={() => dispatch({ type: 'toggleAuthorized' })}>
          Log Out
        </Button>
      )}
    </div>
  );
};

export default Header;
