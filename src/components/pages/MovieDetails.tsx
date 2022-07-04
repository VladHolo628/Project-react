import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Tilt from 'react-parallax-tilt';
import filterData from '../../data/data';
import Button from '../UI/Button';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const MovieDetails = () => {
  const { id } = useParams();
  const outputMovies = useSelector((state: RootState) => state.outputMovies);
  const currentMovie = outputMovies.find(movie => {
    return movie.id === +id;
  });
  const imagePath = currentMovie.poster_path || currentMovie.backdrop_path;

  const genres = filterData.filter(item => {
    return currentMovie?.genre_ids.includes(item.id);
  });

  const genresNames = genres.map(item => item.name);

  console.log(genresNames);
  return (
    <div className="h-1/2">
      <div className="h-2/5 p-10 bg-gradient-to-l from-stone-800 via-purple-700 to-pink-700 flex justify-around items-center relative">
        <Tilt className="" perspective={5000}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${imagePath}`}
            alt=""
            className=" w-3/4 object-contain  rounded shadow-2xl"
          />
        </Tilt>

        <div className="w-1/2 flex flex-col">
          <h1 className="text-4xl mb-12 font-semibold text-stone-100 indent-6 ">
            {currentMovie?.title}
          </h1>
          <p className="text-xl text-stone-100 indent-6 leading-8">
            {currentMovie?.overview}
          </p>
        </div>
      </div>
      <div className="h-1/2 pb-10">
        <div className="w-full">
          <Tabs
            className="px-8 pt-8"
            selectedTabClassName=" text-white bg-purple-700">
            <TabList className=" flex justify-around w-2/3 mx-auto">
              <Tab
                selectedTabClassName="text-white"
                disabledTabClassName="text-purple-700 "
                className=" font-lg border-2 border-purple-700 rounded-t border-b-0 px-4 py-1 cursor-pointer font-semibold">
                Детали
              </Tab>
              <Tab
                disabled={!currentMovie?.video}
                selectedTabClassName="text-white"
                disabledTabClassName="bg-stone-400 border border-stone-400"
                className="font-lg border-2 border-purple-700 rounded-t border-b-0 px-4 py-1 cursor-pointer font-semibold ">
                Видео
              </Tab>
              <Tab
                selectedTabClassName="text-white"
                disabledTabClassName="text-purple-700 "
                className="font-lg border-2 border-purple-700 rounded-t border-b-0 px-4 py-1  cursor-pointer font-semibold">
                Актеры
              </Tab>
            </TabList>
            <TabPanel className=" h-96">
              <table className="mx-auto mt-10 text-lg">
                <tbody>
                  <tr className="shadow-b mb-6 ">
                    <td className="mr-20 inline-block py-4">
                      Оригинальное название:
                    </td>

                    <td className="py-4 text-purple-800">
                      {currentMovie?.original_title}
                    </td>
                  </tr>
                  <tr className="">
                    <td className="mr-8   py-4">Язык оригинала:</td>

                    <td className="py-4 text-purple-800">
                      {currentMovie?.original_language}
                    </td>
                  </tr>
                  <tr className="">
                    <td className="mr-8   py-4">Популярность:</td>
                    <td className="py-4 text-purple-800">
                      {currentMovie?.popularity}
                    </td>
                  </tr>
                  <tr className="">
                    <td className="mr-8   py-4">Для взрослых:</td>

                    <td className="py-4 text-purple-800">
                      {currentMovie?.adult ? 'Да' : 'Нет'}
                    </td>
                  </tr>
                  <tr className="">
                    <td className="mr-8   py-4">Жанры:</td>

                    <td className="py-4 text-purple-800">
                      {genresNames.join(', ')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
