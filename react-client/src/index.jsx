import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PersonalRecord from './components/PersonalRecord.jsx';
import GoogleMap from './components/Map.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (
      <div>
        <h1>The Gym Rulebook</h1>
        <table className='rules'> 
          <tr>
            <th>Total</th>
            <th>Level</th>
            <th>Allowed</th>
            <th>Not Allowed</th>
          </tr>
          <tr>
            <th>Under 225</th>
            <th>Level 1</th>
            <th>Machines</th>
            <th>Free Weights</th>
          </tr>
          <tr>
            <th>Under 450</th>
            <th>Level 2</th>
            <th>Level 1 + Free Weights</th>
            <th>Supplements</th>
          </tr>
          <tr>
            <th>Under 675</th>
            <th>Level 3</th>
            <th>Level 2 + Supplements</th>
            <th>Gloves / Straps</th>
          </tr>
          <tr>
            <th>Under 900</th>
            <th>Level 4</th>
            <th>Level 3 + Gloves / Straps</th>
            <th>UA Compressions</th>
          </tr>
          <tr>
            <th>Under 1125</th>
            <th>Level 5</th>
            <th>Level 4 + UA Compressions</th>
            <th>Grunting</th>
          </tr>
          <tr>
            <th>Under 1350</th>
            <th>Level 6</th>
            <th>Level 5 + Grunting</th>
            <th>Slamming Weights</th>
          </tr>
        </table>
        <PersonalRecord />
        <GoogleMap /> 
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));