import SearchBar from './SearchBar';
import React, { Component } from 'react';
import Unsplash from '../api/Unsplash';
import ImageList from './ImageList';

export default class App extends Component {

  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await Unsplash.get('/search/photos', {
        params: {
          query: term
        }
      });
      this.setState({ images: response.data.results });
      console.log(response.data.results);
  }
  
  render() {
    return (
        <div className="ui container" style={{ marginTop: '10px'}}>
          <SearchBar onSearchQuerySubmit={this.onSearchSubmit} />
          Found: {this.state.images.length} images
          <ImageList images={this.state.images} />
        </div>
    )
  }
}
