import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Create from './pages/Create';
import Search from './pages/Search';
import Car from './pages/Car';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path="/create" element={<Create />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cars/:id" element={<Car />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
