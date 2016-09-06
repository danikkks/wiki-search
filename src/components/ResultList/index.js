import React, { Component } from 'react';

import Card from '../../components/Card';

import './styles.css';

class ResultList extends Component {
  static propTypes = {
    actions: React.PropTypes.object,
    data: React.PropTypes.array,
  }

  render() {
    const { data: [value, titles, descriptions, links] } = this.props; // eslint-disable-line no-unused-vars
    return (
      <div className="resultList">
        {titles.map((title, index) => (
          <Card>
            <a href={links[index]} target="_blank"><h2 key={index}>{title}</h2></a>
            <p>{descriptions[index]}</p>
          </Card>
        ))}
      </div>
    );
  }
}

export default ResultList;
