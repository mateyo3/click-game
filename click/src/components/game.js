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
      }

    // handleSetTopScore  = () => {
    //     this.setState({ score: this.state.score + 1 });
    //   }
    

    

    render() {
      return (
    	<div className="game-containter">
        <img src={useImage[0]} height="200" width="200" />
        <img src={useImage[1]} height="200" width="200" />
        <img src={useImage[2]} height="200" width="200" />
        <img src={useImage[3]} height="200" width="200" />
        <img src={useImage[4]} height="200" width="200" />
        <img src={useImage[5]} height="200" width="200" />
        <img src={useImage[6]} height="200" width="200" />
        <img src={useImage[7]} height="200" width="200" />
        <img src={useImage[8]} height="200" width="200" />
        <img src={useImage[9]} height="200" width="200" />
        <img src={useImage[10]} height="200" width="200" />
        <img src={useImage[11]} height="200" width="200" />
        <img src={useImage[12]} height="200" width="200" />
        
    	</div>


      );
    }
  }


  // const Game = () => (
  //     <div className="game-containter">
  //       <img src={"https://github.com/mateyo3/click-game/blob/master/click/public/assets/images/corgi-pup-01.jpg?raw=true"} alt="corgi-pup-01" className="img-responsive"/>
  //     </div>




export default Game;



        
