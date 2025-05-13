import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DoctorsPage from './pages/DoctorsPage';
import BookPage from './pages/BookPage';
import DashboardPage from './pages/DashboardPage';
import AdminPage from './pages/AdminPage';
import LogsPage from './pages/LogsPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/logs" element={<LogsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
