import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          Reminder App
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="I have to..."/>
          </div>
          <button type="button" className="btn btn-success">
            Add a Reminder
          </button>
        </div>
      </div>
    );
  }
}
