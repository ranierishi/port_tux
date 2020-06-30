import React from 'react';

import './App.css';
import Header from './components/header'
import { BrowserRouter } from 'react-router-dom';
//import MainPage from './pages/MainPage';
import Routes from './routes'
import Footer from './components/Footer'
function App() {
  return (
    <BrowserRouter>
      <Header />   
      <Routes />   
      <Footer />
  </BrowserRouter>
  );
}

export default App;
