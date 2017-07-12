import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addReminder, deleteReminder} from '../actions/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
  }

  addReminder() {
    console.log('this.state.dueDate',  this.state.dueDate);
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteReminder(id){
    this.props.deleteReminder(id);
  }

  renderReminders() {
    const {reminders} = this.props;
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder =>{
            return (
              <li key={reminder.id} className="list-group-item">
                  <div className="reminder-name">
                    {reminder.text}
                  </div>
                  <div
                    className="list-item delete-button"
                    onClick={() => this.deleteReminder(reminder.id)}>
                    &#x2715;
                  </div>
                  <div className="cf"></div>
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
              <input type="datetime-local"
                     className="form-control"
                     onChange={event => this.setState({dueDate: event.target.value})}
              />
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
  return bindActionCreators({ addReminder, deleteReminder }, dispatch);
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
