import React, { Component } from 'react';


  const rows = ({tasks, changeStatus}) => {
    return(
      <ul>
        {
          tasks.map(item => (
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
