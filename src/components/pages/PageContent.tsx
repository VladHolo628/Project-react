import Filter from '../Filter';
import MovieList from '../MovieList';

const PageContent: React.FC = () => {
  return (
    <div className="flex bg-gradient-to-bl from-rose-700 via-indigo-100 to-current px-6 py-6 h-full">
      <Filter />
      <MovieList />
    </div>
  );
};

export default PageContent;
