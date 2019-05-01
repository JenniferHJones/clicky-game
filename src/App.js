import React from "react";
import images from "./images.json";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Images from "./components/Images/Images";
import Footer from "./components/Footer/Footer";
import './App.css';

// function App() {
class App extends React.Component {
  state = {
    images: images,
  };

  handleMove = id => {
    const filteredImages = this.state.images.filter(i => i.id);
    this.setState({ images: filteredImages });
  };

  render() {
    return (
      <>
        
          <Header />
          <Jumbotron />
          <Wrapper>
          {this.state.images.map(i => (
            <Images
            handleClick={() => this.handleMove(i.id)} 
            />
          ))}
          </Wrapper>
          <Footer />
      </>
    );
  }
}

export default App;