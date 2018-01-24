import React, { Component } from 'react';
import Images from '../image.json';
// import { Link } from 'react-router';

// function shuffleCor(array) {
//   let i = Images.length - 1;
//   for (; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = Images[i];
//     Images[i] = Images[j];
//     Images[j] = temp;
//   }
//   return randomCorgi;
// }


class Game extends Component {
  // Setting this.state.score to the score json array
  state = {
    score: 0,
    topScore: 0,
    click: false,
    image: ""
  }

  //handles score increase 
  handleIncreaseScore  = () => {
      this.setState({ score: this.state.score + 1 });
    }

  handleSetTopScore  = () => {
      this.setState({ score: this.state.score + 1 });
    }

  handleBtnClick = event => {
    const {name, value} = event.target;

    this.setState({
      click: true,
      score: handleIncreaseScore()
      // topScore:
      //   if (score > topScore) {
      //     this.setState({ this.state.topScore = score })
      //   }
    });

  }

  

  

  render() {
    return (
  	<div className="game-containter">
  		<img src={"https://github.com/mateyo3/click-game/blob/master/click/public/assets/images/corgi-pup-01.jpg?raw=true"} />
  	</div>
    );
  }
}


// const Game = () => (
//     <div className="game-containter">
//       <img src={"https://github.com/mateyo3/click-game/blob/master/click/public/assets/images/corgi-pup-01.jpg?raw=true"} alt="corgi-pup-01" className="img-responsive"/>
//     </div>
// )


export default Game;

