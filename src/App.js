import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import Reviews from './components/Reviews';
import Users from './components/Users'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/users' element={<Users />}></Route>
      </Routes>
    </div>
  );
}

export default App;
