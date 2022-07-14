import React, { useState } from 'react';

const CategoryItem: React.FC<{
  category: string;
  id: number;
  handleOnChange?: React.ChangeEventHandler<HTMLInputElement>;
}> = ({ category, id, handleOnChange }) => {
  return (
    <label className="flex items-center cursor-pointer w-min whitespace-nowrap">
      <input
        id={id.toString()}
        onChange={handleOnChange}
        className="cursor-pointer mr-2 w-4 h-4 rounded-md text-stone-800 focus:ring-stone-800 border-stone-900"
        type="checkbox"
      />
      {category}
    </label>
  );
};

export default CategoryItem;
