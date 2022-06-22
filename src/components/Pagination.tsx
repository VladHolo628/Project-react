import Button from './UI/Button';

const Pagination = () => {
  return (
    <div>
      <div className="flex justify-evenly mb-2">
        <Button type="button">Назад</Button>
        <Button type="button">Вперед</Button>
      </div>
      <p className="text-center">1 of 1442</p>
    </div>
  );
};

export default Pagination;
