import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drink from './pages/Drink/Drink';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='drink/:drinkId' element={<Drink />} />
      </Routes>
    </Router>
  );
}

export default App;
