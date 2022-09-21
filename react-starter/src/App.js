import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';

import './styles/index.css'

function App() {
  return (
    <div className="content">
    <div className='header-div'>
      <Header />
      <Navigation />
    </div>
    <div className="body">
      <div>
      <Project />
      </div>
    </div>
    <div className='footer-div'>
      <Footer />
    </div>
    </div>
  );
}

export default App;