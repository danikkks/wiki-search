import React, { Component } from 'react';

import './styles.css';

class Input extends Component {
  static propTypes = {
    actions: React.PropTypes.object,
    result: React.PropTypes.array,
  }

  render() {
    return (
      <input {...this.props} />
    );
  }
}

export default Input;
