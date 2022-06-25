const MovieCard = (props: { rating: number; name: string; src: string }) => {
  return (
    <div className="flex  bg-stone-100 rounded-md overflow-hidden shadow-lg h-80">
      <img src={props.src} className="w-2/5 aspect-poster " />
      <div className="p-4 flex flex-col w-full">
        <div className="flex justify-between mb-6">
          <p className="mr-6">Рейтинг: 
          <span className="font-lg ml-2 font-semibold text-amber-600">
            {props.rating}
          </span> </p>
          <div className="flex">
            <img
              className="w-6 mr-6 cursor-pointer"
              src="src/img/star.svg"
              alt=""
            />
            <img
              className="w-6 cursor-pointer"
              src="src/img/bookmark.svg"
              alt=""
            />
          </div>
        </div>
        <p className="font-semibold">{props.name}</p>
        <button className="mt-auto inline-block w-min text-amber-600 hover:text-stone-600">
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
