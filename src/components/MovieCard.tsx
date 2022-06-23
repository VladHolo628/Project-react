const MovieCard = (props: { rating: number; name: string; src: string }) => {
  return (
    <div className="flex  bg-green-100 rounded overflow-hidden shadow-md shadow-green-600/50 border-2 border-green-500 h-56">
      <img src={props.src} className="w-2/5 aspect-poster " />
      <div className="p-4 flex flex-col w-full">
        <div className="flex justify-between mb-4">
          <p className="mr-6">Рейтинг: {props.rating}</p>
          <div className="flex">
            <img
              className="w-4 mr-4 cursor-pointer"
              src="src/img/star.svg"
              alt=""
            />
            <img
              className="w-4 cursor-pointer"
              src="src/img/bookmark.svg"
              alt=""
            />
          </div>
        </div>
        <p className="font-semibold">{props.name}</p>
        <button className="mt-auto inline-block w-min text-green-700">
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
