import React, { Component } from 'react';
import Images from '../image.json';

const shuffle = require('shuffle-array');


let images = Images;
  for (let i = 0; i < images.length; i++) {
    // images[i]  = image[Math.floor(Math.random()*image.length)];
    images[i] = images[i].imgURL;
  }

 let useImage = shuffle(images);
  console.log(useImage);


  class Game extends Component {
    // Setting this.state.score to the score json array
    state = {
      score: 0,
      topScore: 0,
      click: [],
      image: Images
    };
  
    //handles re-shuffle

    // handles score increase
    handleIncreaseScore  = () => {
        this.setState({ score: this.state.score + 1 });
        console.log("Score: " + this.state.score);
      }

    // handleSetTopScore  = () => {
    //     this.setState({ score: this.state.score + 1 });
    //   }
    

    

    render() {
      return (
    	<div className="game-containter">
        <img src={useImage[0]} alt={useImage[0]} onClick={this.handleIncreaseScore} id="0" height="200" width="200" />
        <img src={useImage[1]} alt={useImage[1]} onClick={this.handleIncreaseScore} id="1" height="200" width="200" />
        <img src={useImage[2]} alt={useImage[2]} onClick={this.handleIncreaseScore} id="2" height="200" width="200" />
        <img src={useImage[3]} alt={useImage[3]} onClick={this.handleIncreaseScore} id="3" height="200" width="200" />
        <img src={useImage[4]} alt={useImage[4]} onClick={this.handleIncreaseScore} id="4" height="200" width="200" />
        <img src={useImage[5]} alt={useImage[5]} onClick={this.handleIncreaseScore} id="5" height="200" width="200" />
        <img src={useImage[6]} alt={useImage[6]} onClick={this.handleIncreaseScore} id="6" height="200" width="200" />
        <img src={useImage[7]} alt={useImage[7]} onClick={this.handleIncreaseScore} id="7" height="200" width="200" />
        <img src={useImage[8]} alt={useImage[8]} onClick={this.handleIncreaseScore} id="8" height="200" width="200" />
        <img src={useImage[9]} alt={useImage[9]} onClick={this.handleIncreaseScore} id="9" height="200" width="200" />
        <img src={useImage[10]} alt={useImage[10]} onClick={this.handleIncreaseScore} id="10" height="200" width="200" />
        <img src={useImage[11]} alt={useImage[11]} onClick={this.handleIncreaseScore} id="11" height="200" width="200" />
        <img src={useImage[12]} alt={useImage[12]} onClick={this.handleIncreaseScore} id="12" height="200" width="200" />
        
    	</div>


      );
    }
  }


  // const Game = () => (
  //     <div className="game-containter">
  //       <img src={"https://github.com/mateyo3/click-game/blob/master/click/public/assets/images/corgi-pup-01.jpg?raw=true"} alt="corgi-pup-01" className="img-responsive"/>
  //     </div>




export default Game;



        
