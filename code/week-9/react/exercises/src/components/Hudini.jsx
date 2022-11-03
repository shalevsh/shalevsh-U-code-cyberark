import React, { Component } from 'react';

class Hudini extends Component {
  constructor() {
    super()
    this.state = {
        show:false
    }
  }
    render() {
        return (
            <div>
                {this.state.show? <div>Now you see me</div> :<div>Now you dont</div>}
            </div>
        );
    }
}

export default Hudini;