import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Modal from './components/Modal';
import Filter from './components/Filter';
import PageContent from './components/pages/PageContent';
import MovieDetails from './components/pages/MovieDetails';
import MovieSearch from './components/pages/MovieSearch';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { useEffect } from 'react';
function App() {
  const isAuthorized = useSelector((state: RootState) => state.isAuthorized);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('isAuthorized') !== isAuthorized.toString()) {
      dispatch({ type: 'toggleAuthorized' });
    }
  }, []);
  return (
    <Router>
      <Modal />
      <Header />
      <Routes>
        <Route path="/" element={<PageContent />} />
        <Route path="/:id" element={<MovieDetails />} />
        <Route path="/search" element={<MovieSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
