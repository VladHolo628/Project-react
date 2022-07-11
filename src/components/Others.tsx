const Others = () => {
  return (
    <form className="w-full">
      <fieldset className="flex justify-around">
        <div className="">
          <input
            name="votes"
            type="radio"
            value="high"
            id="high"
            className="mt-2 w-8 h-8 cursor-pointer peer hidden"
            defaultChecked
          />
          <label
            htmlFor="high"
            className="flex flex-col items-center cursor-pointer text-lg p-2 rounded-md peer-checked:bg-gradient-to-r from-purple-700 to-pink-700 peer-checked:text-stone-100">
            Популярный
          </label>
        </div>
        <div className="">
          <input
            name="votes"
            type="radio"
            value="low"
            id="low"
            className="mt-2 w-8 h-8 cursor-pointer peer hidden"
          />
          <label
            htmlFor="low"
            className="flex flex-col items-center cursor-pointer text-lg p-2 rounded-md peer-checked:bg-gradient-to-r from-purple-700 to-pink-700 peer-checked:text-stone-100">
            Неизвестный
          </label>
        </div>
      </fieldset>
    </form>
  );
};

Others.propTypes = {};

export { Others };
