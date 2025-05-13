import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DoctorsPage from './pages/DoctorsPage';
import BookPage from './pages/BookPage';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Log from './pages/Log';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/log" element={<Log/>} />
      </Routes>
    </Router>
  );
}

export default App;
