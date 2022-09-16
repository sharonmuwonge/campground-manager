import {BrowserRouter, Routes, Route, useParams, Navigate} from 'react-router-dom'
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
            <Route path='/' element={user ? <Home /> : <Navigate to="/signin"/>}/>
            <Route path='/reservations' element={user ? <Reservations /> : <Navigate to="/signin"/>}/>
            <Route path='/campsites' element={user ? <Campsites /> : <Navigate to="/signin"/>}/>
            <Route path='/reservations/:id' element={user ? <Reservation id={id}/> : <Navigate to="/signin"/>}/>
            <Route path='/campsites/:id' element={user ? <Campsite id={id}/> : <Navigate to="/signin"/>}/>
            <Route path='/signin' element={!user ? <SignIn /> : <Navigate to="/"/>}/>
            <Route path='/settings' element={user ? <Settings /> : <Navigate to="/signin"/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
