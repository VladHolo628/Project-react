import Button from './UI/Button';
import HomeButton from './UI/HomeButton';
import LoginButton from './UI/LoginButton';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-stone-900 px-6 py-4 shadow-lg">
      <HomeButton />
      <Button type="button" classes="" handler="">
        Log In
      </Button>
    </div>
  );
};

export default Header;
