import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addReminder} from '../actions/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  addReminder() {
    // console.log('this',  this);
    this.props.addReminder(this.state.text);
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          Reminder App
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input type="text"
              className="form-control"
              placeholder="I have to..."
              onChange={event => this.setState({text: event.target.value})}/>
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}>
            Add a Reminder
          </button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addReminder}, dispatch);
}


export default connect(null, mapDispatchToProps)(App);
// export default connect(null, {addReminder})(App);
//Si fuera solo un binding, tambien se podria quitar el import de
//bindActionCreators
