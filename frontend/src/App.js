import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Pages & components
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Reservations from './pages/Reservations';
import Campsites from './pages/Reservations';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/reservations' element={<Reservations />}/>
            <Route path='/campsites' element={<Campsites />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
