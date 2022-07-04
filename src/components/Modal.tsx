import React, { ReactEventHandler, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Button from './UI/Button';

const Modal: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const showModal = useSelector((state: RootState) => state.showModal);
  const dispatch = useDispatch();
  const defaultLogin = 'Holo';
  const defaultPassword = 'password';

  const authorize = (login: string, password: string) => {
    const loginIsCorrect = login === defaultLogin;
    const passwordIsCorrect = password === defaultPassword;

    if (loginIsCorrect && passwordIsCorrect) {
      dispatch({ type: 'toggleAuthorized' });
      dispatch({ type: 'toggleModal' });
      alert('authorized');
      return;
    }

    return alert('Wrong!');
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authorize(login, password);
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const loginHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };
  if (!showModal) return null;
  return (
    <div className="h-full w-full flex justify-center items-center bg-stone-900/80 fixed top-0 left-0 scrolling ">
      <div className="w-2/5 h-2/5 flex flex-col bg-gradient-to-l from-purple-700 to-pink-700 text-stone-100 rounded p-6 relative">
        <Button
          type="button"
          classes="absolute top-6 right-6"
          handler={() => {
            dispatch({ type: 'toggleModal' });
          }}>
          Закрыть
        </Button>
        <form className="flex flex-col w-2/3 " onSubmit={submitHandler}>
          <label htmlFor="login" className="block mb-3 ">
            Имя пользователя:
          </label>
          <input
            required
            onChange={loginHandler}
            value={login}
            className="rounded mb-4 w-full text-stone-800 font-semibold"
            id="login"
            type="text"
          />

          <label htmlFor="pass" className="block mb-3 ">
            Пароль:
          </label>
          <input
            required
            onChange={passwordHandler}
            value={password}
            className="rounded w-full text-stone-800 font-semibold"
            id="pass"
            type="password"
          />

          <Button type="submit" classes="w-1/2 mt-8 self-center">
            Войти
          </Button>
        </form>
        <svg
          className="absolute bottom-10 right-10 w-24 rotate-12 fill-stone-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path d="M13 21a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-8a1 1 0 0 0 0 2h7v18Z" />
          <path d="M2 12a1 1 0 0 0 1 1h11.59l-2.3 2.3a1 1 0 1 0 1.42 1.4l4-4a1 1 0 0 0 0-1.4l-4-4a1 1 0 1 0-1.42 1.4l2.3 2.3H3a1 1 0 0 0-1 1Z" />
        </svg>
      </div>
    </div>
  );
};

export default Modal;
