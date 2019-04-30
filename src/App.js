import React from 'react';
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Jumbotron />
      <div className="container">

        <Card />

      </div>
      <Footer />
    </>
  );
}

export default App;
