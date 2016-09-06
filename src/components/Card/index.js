import React, { Component } from 'react';

import './styles.css';

class Card extends Component {
  static propTypes = {
    actions: React.PropTypes.object,
    children: React.PropTypes.children,
  }

  render() {
    const { children } = this.props;
    return (
      <section className="card">
        {children}
      </section>
    );
  }
}

export default Card;
