import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ImageCard from "./components/imagecard";
import imageArr from "./datafile.json";

class App extends React.Component {
  state = {
    imageArr,
    randomShuffle: () => {
      this.setState(({ imageArr }) => ({
        imageArr: imageArr.sort(function() {
          return 0.5 - Math.random();
        })
      }));
    },
    score: 0,
    highScore: 0,
  }

handleClick = id => {
  let clicked = this.state.imageArr.filter(thisImage => thisImage.id === id);
  if (!clicked[0].click) {
    clicked[0].click = true;
    this.setState({ score: this.state.score +1 })
    this.state.randomShuffle();
  } else {
    this.state.imageArr.forEach(imageBool => {
      if (imageBool.click) {
        imageBool.click = false;
      }
    })
  this.setState({ score: 0 })
  }
  
}


  render() {
  console.log(imageArr)
  return (
    <>
      <div className="title-cont">
      <h1>Click Me Meow</h1>
      <p>Your Score: { this.state.score }</p>
      </div>
    {this.state.imageArr.map(image => (
      <ImageCard
      handleClick = { this.handleClick }
      key = {image.id}
      image = {image}
      />
    ))
    }
    </>
  );
}
}

export default App;
