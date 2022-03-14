import React, { Component } from 'react';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Contact from './pages/Contact';

export class App extends Component {
  componentDidMount() {
    document.title = 'Gabriel Tomsic';
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </React.Fragment>
    );
  }
}

export default App;
