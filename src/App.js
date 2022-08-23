import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Home />
      <Movies /> */}

      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
      </Routes>
    </div>
  );
}

export default App;
