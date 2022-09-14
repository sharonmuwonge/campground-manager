import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import {useAuthContext} from './hooks/useAuthContext'

// Pages & components
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Reservation from './pages/Reservation';
import Reservations from './pages/Reservations';
import Campsites from './pages/Campsites';
import Campsite from './pages/Campsite';
import Settings from './pages/Settings';
import SignIn from './pages/SignIn';

function App() {

  let { id } = useParams();
  const { user } = useAuthContext()
  
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          {user && (
            <Navbar />
          )}
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/reservations' element={<Reservations />}/>
            <Route path='/campsites' element={<Campsites />}/>
            <Route path='/reservations/:id' element={<Reservation id={id}/>}/>
            <Route path='/campsites/:id' element={<Campsite id={id}/>}/>
            <Route path='/signin' element={<SignIn />}/>
            <Route path='/settings' element={<Settings />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
