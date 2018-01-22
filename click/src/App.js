import React, { Component } from 'react';
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Game from "./components/game";
import './App.css';
// import Img from "./image.json";

// var Image = require("./assets/images/");


const App = () => (
	<div className="containter">
      <Navbar />
      <Header />
      <Footer /> 
	</div>
);

export default App;

      // <img src={Img.id} alt="corgi-pup-01" />
