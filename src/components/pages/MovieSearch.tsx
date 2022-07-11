import { useState } from 'react';
import { Others } from '../Others';
import { PersonalInfo } from '../PersonalInfo';
import { GenreSelection } from '../GenreSelection';
import Button from '../UI/Button';

const MovieSearch = () => {
  const [step, setStep] = useState(0);
  const formTitles = ['Жанр', 'Оценка', 'Популярность'];
  const isNotLastStep = step !== formTitles.length - 1;

  const StepDisplay = () => {
    switch (step) {
      case 0:
        return <GenreSelection />;
      case 1:
        return <PersonalInfo />;
      default:
        return <Others />;
    }
  };
  return (
    <div className="w-full h-screen bg-gradient-to-l from-stone-800 via-purple-700 to-pink-700 flex justify-center items-center overflow-hidden">
      <div className="w-[500px] h-[500px] bg-stone-100 rounded shadow-md flex flex-col items-center p-5">
        <div className="mb-20 h-2  w-full ">
          <div
            className={
              (step === 0 ? 'w-1/3' : step === 1 ? 'w-2/3' : 'w-full') +
              ' bg-gradient-to-r from-purple-700 to-pink-700 rounded-3xl h-full'
            }></div>
        </div>
        <div className="w-full">
          <div className="">
            <h1 className="text-2xl mb-10">{formTitles[step]}</h1>
          </div>
          <div className="mx-auto mb-10 min-h-[50px]">{StepDisplay()}</div>
          <div className="mx-auto w-1/2 flex justify-between ">
            <Button
              disabled={step === 0}
              type="button"
              handler={() => {
                setStep(prev => prev - 1);
              }}>
              Назад
            </Button>
            {isNotLastStep && (
              <Button
                disabled={step === formTitles.length - 1}
                type="button"
                handler={() => {
                  setStep(prev => prev + 1);
                }}
                classes="w-1/3">
                Далее
              </Button>
            )}
            {!isNotLastStep && (
              <Button
                type="submit"
                classes="bg-gradient-to-br from-purple-800 to-pink-600 w-2/3 ml-5">
                Найти
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSearch;
