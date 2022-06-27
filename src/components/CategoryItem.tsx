const CategoryItem: React.FC<{ category: string }> = ({ category }) => {
  return (
    <label className="flex items-center cursor-pointer w-min whitespace-nowrap">
      <input
        className="cursor-pointer mr-2 w-4 h-4 rounded-md text-stone-800 focus:ring-stone-800 border-stone-900"
        type="checkbox"
      />
      {category}
    </label>
  );
};

export default CategoryItem;
