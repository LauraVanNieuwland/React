import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    }

    search("homer thinking");

  }

  search = (query) => {
    // API Call
    giphy('YJ2fvzu8FkBF5F47oqqoNJqJbxRDZEFF').search({
      q: query,
      rating: 'g'
    }, function (err, res) {
      console.log(res);
    });
  }


  render() {
    const gifs = [
      { id: "xT9IgDEI1iZyb2wqo8" },
      { id: "3ohzdIrmkBVi08uouc" }

    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className='selected-gif'>
          <Gif id={this.state.selectedGifId}/>

          </div>
        </div>
        <div className="right-scene"></div>
          <GifList gifs={this.state.gifs} />
      </div>
    );
  }
} 

export default App;