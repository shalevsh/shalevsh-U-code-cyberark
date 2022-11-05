import './App.css';
import Hudini from './components/Hudini';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state =   {
      user: "Robyn",
      store: [
        { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
        { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
        { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
      ],
      shouldDiscount: false,
      currentPage: "Landing"
    }
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;