import HomeButton from './UI/HomeButton';
import LoginButton from './UI/LoginButton';

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-slate-900 px-6 py-2 shadow-lg">
      <HomeButton />
      <LoginButton />
    </div>
  );
};

export default Header;
