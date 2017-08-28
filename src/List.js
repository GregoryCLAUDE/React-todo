import React, { Component } from 'react';

  const getVisibilityFilter = (filter, tasks) => {
    //filter = this.props.filter;
    if (filter === "TODO"){
      return tasks.filter(item => !item.status);
    }
    if (filter === "DONE"){
      return tasks.filter(item => item.status);
    }
    return tasks;
  }

  const rows = ({filter, tasks, changeStatus}) => {
    return(
      <ul>
        {
          getVisibilityFilter(filter, tasks).map(item => (
            <li key={item.id}
            className={item.status ? 'done':'todo'}
            onClick={()=>{changeStatus(item.id)}}
            >
            {item.content}
            </li>
          ))
        }
      </ul>
    )};

export default rows;
