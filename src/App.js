import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from './components/Layout';
import Books from './routes/Books';
import Category from './routes/Category';
import './scss/index.scss';
import { getBooks } from './redux/books/bookSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="books" />} />
            <Route path="books" element={<Books />} />
            <Route path="categories" element={<Category />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
