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

  renderReminders() {
    const {reminders} = this.props;
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder =>{
            return (
              <li key={reminder.id} className="list-group-item">
                  <div>
                    {reminder.text}
                  </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          Reminder App
        </div>
        <div className="form-inline reminder-form">
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
        { this.renderReminders() }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addReminder}, dispatch);
}

function mapStateToProps(state) {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect(null, {addReminder})(App);
//Si fuera solo un binding, tambien se podria quitar el import de
//bindActionCreators
