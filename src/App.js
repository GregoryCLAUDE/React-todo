import React, { Component } from 'react';
import { v4 } from 'node-uuid';

import AddTask from './AddTask';
import List from './List';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks: [],
    }
    this._addTaskOnSubmit = this._addTaskOnSubmit.bind(this);
  }

  _addTaskOnSubmit(task){

    this.setState({
      tasks : [
          ...this.state.tasks,
          {content : task, id: v4(),status: false}
      ]
    });
  }

  render() {
    console.log(this.state.tasks);
    return (
      <div>
        <AddTask  addTask={this._addTaskOnSubmit} />
        <List tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
