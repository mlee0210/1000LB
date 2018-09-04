import React from 'react';

class CheckRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      benchpress: props.benchpress,
      deadlift: props.deadlift,
      squat: props.squat,
      message: ''
    }
  }

  componentDidMount() {
    let total = parseInt(this.state.benchpress) + parseInt(this.state.deadlift) + parseInt(this.state.squat);
    if(total < 225) {
      this.setState({message: 'Based on your records, you are on Level 1'});
    } else if(total < 450) {
      this.setState({message: 'Based on your records, you are on Level 2'});
    } else if(total < 675) {
      this.setState({message: 'Based on your records, you are on Level 3'});
    } else if(total < 900) {
      this.setState({message: 'Based on your records, you are on Level 4'});
    } else if(total < 1125) {
      this.setState({message: 'Based on your records, you are on Level 5'});
    } else if(total < 1350) {
      this.setState({message: 'Based on your records, you are on Level 6'});
    } else {
      this.setState({message: 'Based on your records, you do not have any restrictions'});
    }
  }

  render() {
    return (
      <div >
        {this.state.message}
      </div>
    )
  }
}

export default CheckRecord;