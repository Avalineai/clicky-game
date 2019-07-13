import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ImageCard from "./components/imagecard";
import imageArr from "./datafile.json";

class App extends React.Component {
  // state = {
  //   imageCard: imageArr
  // }
  render() {
  console.log(imageArr)
  return (
    <>
    {imageArr.map(image => (
      <ImageCard
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
