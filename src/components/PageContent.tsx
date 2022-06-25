import Filter from './Filter';
import MovieList from './MovieList';

const PageContent = () => {
  return (
    <div className="flex bg-stone-300 px-6 py-6 h-full">
      <Filter />
      <MovieList />
    </div>
  );
};

export default PageContent;
