import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { ReservationsContextProvider } from '../src/context/ReservationsContext'
import { AuthContextProvider  } from '../src/context/AuthContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    < AuthContextProvider>
      < ReservationsContextProvider>
        <App />
      </ReservationsContextProvider>
    </AuthContextProvider>
  </ChakraProvider>
);
