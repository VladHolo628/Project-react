import Filter from './Filter';
import MovieList from './MovieList';

const PageContent = () => {
  return (
    <div className="flex bg-slate-800 px-6 pt-4 pb-2 h-full">
      <Filter />
      <MovieList />
    </div>
  );
};

export default PageContent;
