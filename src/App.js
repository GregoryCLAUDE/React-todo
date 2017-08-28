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
    this._changeTaskStatus = this._changeTaskStatus.bind(this);
  }


  _addTaskOnSubmit(task){

    this.setState({
      tasks: [
          ...this.state.tasks,
          {content : task, id: v4(),status: false}
      ]
    });
  }

  _changeTaskStatus(id){
    this.setState({
        tasks: this.state.tasks.map(item =>{
          if (item.id === id){
            return {content: item.content, status: !item.status, id: item.id}
          }
          return item;
        }),
      })
    }

    componentDidMount(){
      let storage = JSON.parse(localStorage.getItem('state'));
      if (this.state.tasks.length === 0 && storage !== null){
          this.setState({
            tasks: storage
          })
      }
    }

    componentDidUpdate(){
      if (this.state.tasks.length !== 0){
        localStorage.setItem('state', JSON.stringify(this.state.tasks));
      }
    }

  render(){
    console.log(this.state.tasks);
    return (
      <div>
        <AddTask  addTask={this._addTaskOnSubmit} />
        <List tasks={this.state.tasks} changeStatus={this._changeTaskStatus} />
      </div>
    )
  }
};

export default App;
