import React from 'react';
import AddFishForm from './AddFishForm';
class Inventory extends React.Component {
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <AddFishForm addFish={ this.addFish } loadSamples={ this.loadSamples }/>
        <button onClick={this.props.loadSamples} >Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
