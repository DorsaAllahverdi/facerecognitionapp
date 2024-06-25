import React, { Component } from 'react';
import 'tachyons';
import './App.css';
import ParticlesBg from 'particles-bg';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkInput from './Components/ImageLinkInput/ImageLinkInput';
import FaceDetectedImage from './Components/FaceDetectedImage/FaceDetectedImage';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input:'',
      imageUrl:'',
      facesLoc: [{}],
    }
  }

  calculateFaceLocation = (result) => {
    const BBox = [];
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    const regions = result.outputs[0].data.regions;
  
    regions.forEach(region => {
        const boundingBox = region.region_info.bounding_box;

        BBox.push({"top": boundingBox.top_row * height,
                   "left":boundingBox.left_col * width,
                   "bottom": height - (boundingBox.bottom_row * height), 
                   "right": width - (boundingBox.right_col * width)});
    });

    return BBox;

  }

  displayFaceBox = (facesLoc) => {
    this.setState({facesLoc: facesLoc});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonClicked = (event) => {
    this.setState({imageUrl:this.state.input});
      
    const PAT = 'ee8764e32e6044d3ba6d1ce3e40045e1';
    const USER_ID = 'clarifai';       
    const APP_ID = 'main';
    const MODEL_ID = 'face-detection';
  
    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": this.state.input
                    }
                }
            }
        ]
    });
  
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };
  
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", requestOptions)
        .then(response => response.json())
        .then(result => this.displayFaceBox(this.calculateFaceLocation(result)))
        .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div className="App">
        <ParticlesBg type="circle" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkInput onInputChange={this.onInputChange} onButtonClicked={this.onButtonClicked} />
        <FaceDetectedImage imageUrl={this.state.imageUrl} facesLoc={this.state.facesLoc} />
      </div>
    );
  }
}

export default App;
