import React from "react";
import images from "./images.json";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Images from "./components/Images/Images";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends React.Component {
  state = {
    images,
    clickedImages: [],
    highscore: 0,
    score: 0,
    totalClick: 0
  };

  handleShuffle(id) {
    if (!this.state.clickedImages.includes(id)) {
      this.setState({
        score: this.state.score + 1,
        clickedImages: [...this.state.clickedImages, id]
      });
    }
    this.setState({
      images: images.sort(() => Math.random() - 0.5),
      totalClick: this.state.totalClick + 1
    });
  }

  render() {
    return (
      <>
        <Header score />
        <Jumbotron />
        <Wrapper>
          {this.state.images.map(i => (
            <Images
              key={i.id}
              name={i.name}
              image={i.image}
              clickHandler={() => this.handleShuffle(i.id)}
            />
          ))}
        </Wrapper>
        <Footer />
      </>
    );
  }
}

export default App;
