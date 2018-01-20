import React, { Component } from 'react';
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Game from "./components/game";
import './App.css';
import './public/assets/images/'


const App = () => (
    <div className="containter">
      <Navbar />
      <Header />
      
<div class="row"> 
  <div class="column">
    <img src="images/corgi-pup-01.jpg">
    <img src="corgi-pup-02.jpg">
    <img src="corgi-pup-01.jpg">
    <img src="corgi-pup-01.jpg">
    <img src="corgi-pup-01.jpg">
    <img src="corgi-pup-01.jpg">
    <img src="corgi-pup-01.jpg">
  </div>
  <div class="column">
    <img src="corgi-pup-01.jpg">
    <img src="corgi-pup-01.jpg">
    <img src="corgi-pup-01.jpg">
    <img src="corgi-pup-01.jpg">
    <img src="corgi-pup-01.jpg">
    <img src="corgi-pup-01.jpg">
  </div> 
  <div class="column">
    <img src="corgi-pup-01.jpg">
    <img src="corgi-pup-01.jpg">
    <img src="corgi-pup-01.jpg">
    <img src="corgi-pup-01.jpg">
    <img src="corgi-pup-01.jpg">
    <img src="corgi-pup-01.jpg">
    <img src="corgi-pup-01.jpg">
  </div>
  <div class="column">
    <img src="corgi-pup-01.jpg">
    <img src="corgi-pup-01.jpg">
    <img src="corgi-pup-01.jpg">
    <img src="corgi-pup-01.jpg">
    <img src="corgi-pup-01.jpg">
    <img src="corgi-pup-01.jpg">
  </div>
</div>
      <Footer /> 
    </div>
);

export default App;
