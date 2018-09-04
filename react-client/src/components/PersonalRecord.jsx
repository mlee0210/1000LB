import React from 'react';
import CheckRecord from './CheckRecord.jsx';

class PersonalRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      submit: false,
      benchpress: '',
      deadlift: '',
      squat: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
    this.handleBenchPressChange = this.handleBenchPressChange.bind(this);
    this.handleDeadliftChange = this.handleDeadliftChange.bind(this);
    this.handleSquatChange = this.handleSquatChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.benchpress) {
      return this.setState({error: 'Bench Press record is required', submit: false});
    }
    if(!this.state.deadlift) {
      return this.setState({error: 'Deadlift record is required', submit: false});
    }
    if(!this.state.squat) {
      return this.setState({error: 'Squat record is required', submit: false});
    }
    return this.setState({submit: true});
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleBenchPressChange(e) {
    this.setState({benchpress: e.target.value, submit: false});
  }

  handleDeadliftChange(e) {
    this.setState({deadlift: e.target.value, submit: false});
  }

  handleSquatChange(e) {
    this.setState({squat: e.target.value, submit: false});
  }

  render() {
    return (
      <div>
        <form id='recordForm' onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <label> Bench Press: </label>
          <input type='text' value={this.state.benchpress} onChange={this.handleBenchPressChange} />
          <label> Deadlift: </label>
          <input type='text' value={this.state.deadlift} onChange={this.handleDeadliftChange} />
          <label> Squat: </label>
          <input type='text' value={this.state.squat} onChange={this.handleSquatChange} />
          <input type='submit' value='Submit' />
        </form>
        <div> {this.state.submit ? <CheckRecord benchpress={this.state.benchpress} deadlift={this.state.deadlift} squat={this.state.squat} /> : null} </div>
      </div>
    )
  }
}

export default PersonalRecord;