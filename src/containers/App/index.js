import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Debounce } from 'react-throttle';

import Input from '../../components/Input';
import Select from '../../components/Select';
import ResultList from '../../components/ResultList';

import * as actions from '../../actions';
import * as config from '../../config';

import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  static propTypes = {
    actions: React.PropTypes.object,
    result: React.PropTypes.array,
  }

  handleChange(e) {
    const { actions } = this.props;
    const { target: { value } } = e;
    const type = e.target.getAttribute('data-type');

    if (value !== '') {
      if (type === 'value') {
        actions.setValue(value);
      } else if (type === 'profile') {
        actions.setProfile(value);
      } else if (type === 'limit') {
        actions.setLimit(value);
      }

      if (this.props.value && this.props.value !== '') {
        actions.getResult();
      }
    }
  }

  render() {
    const { result } = this.props;
    const { handleChange } = this;

    return (
      <div className="App">
        <h1>Wiki search</h1>
        <Debounce time="400" handler="onChange">
          <Input data-type="value" onChange={handleChange} />
        </Debounce>

        <Select data-type="profile" onChange={handleChange}>
         {config.profiles.map((profile, index) => (
           <option value={profile} key={index}>{profile}</option>
         ))}
        </Select>

        <Select data-type="limit" onChange={handleChange}>
         {config.limits.map((limit, index) => (
           <option value={limit} key={index}>{limit}</option>
         ))}
        </Select>

        {result.loading ? <span>...loading...</span> : null}
        {result.data ? <ResultList data={result.data} /> : null}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    ...state,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: { ...bindActionCreators({ ...actions }, dispatch) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
