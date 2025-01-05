import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import NotFoundPage from './pages/error/NotFoundPage';

function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/404" element={<NotFoundPage/>} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
