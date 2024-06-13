import React from 'react';
import './App.css';
import Sessions from "./components/Sessions"
import Home from './components/Home';
import Reservation from './components/Reservation';
import DetailsSessions from './components/DetailsSessions';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Footer from "./components/Footer";
import Mentions from './components/Mentions';


function App() {
  let component
  switch(window.location.pathname){
    case "/":
      component = <Home/>
      break
    case "/Reservation":
      component = <Reservation/>
      break;
    case "/DetailsSessions":
      component = <DetailsSessions/>
      break;
    case "/Contact":
      component = <Contact/>
      break;
    case "/Mentions":
      component = <Mentions/>
  }
  return (
    <div className="App"> 
      <Nav/>
      {component}
      <Footer/>
    </div>
  );
}

export default App;
