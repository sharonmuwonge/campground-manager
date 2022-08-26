import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'

// Pages & components
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Reservation from './pages/Reservation';
import Reservations from './pages/Reservations';
import Campsites from './pages/Reservations';

function App() {

  let { id } = useParams();
  
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/reservations' element={<Reservations />}/>
            <Route path='/campsites' element={<Campsites />}/>
            <Route path='/reservations/:id' element={<Reservation id={id}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
