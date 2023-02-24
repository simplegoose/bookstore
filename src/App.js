import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Layout from './components/Layout';
import Books from './routes/Books';
import Category from './routes/Category';
import './scss/index.scss';

function App() {
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
