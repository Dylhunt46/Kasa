import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main.jsx';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
        <Gallery />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
