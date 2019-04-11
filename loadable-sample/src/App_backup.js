import React, { Component } from 'react';
import withSplitting from './withSplitting';

const SplitMe = withSplitting(() => import('./SplitMe'));

class App_backup extends Component {
  state = {
    visible: false
  };
  handleclick = () => {
    this.setState({
      visible: true
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <div className='App'>
        <button onClick={this.handleclick}>click me!!</button>
        {visible && <SplitMe />}
      </div>
    );
  }
}

// export default App;
