import React, { Component } from 'react';

import './styles.css';

class Select extends Component {
  static propTypes = {
    actions: React.PropTypes.object,
    result: React.PropTypes.array,
    children: React.PropTypes.node,
  }

  render() {
    const { children, ...props } = this.props;
    return (
      <select {...props}>
        {children}
      </select>
    );
  }
}

export default Select;
