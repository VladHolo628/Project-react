const CategoryItem = (props: { category: string }) => {
  return (
    <label>
      <input className="mr-2" type="checkbox" />
      {props.category}
    </label>
  );
};

export default CategoryItem;
