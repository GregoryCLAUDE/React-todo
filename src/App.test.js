import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import addTask from './AddTask';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddTask />, div);
});
