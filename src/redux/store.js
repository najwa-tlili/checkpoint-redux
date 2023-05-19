import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TaskList from './TaskList';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <TaskList />
  </Provider>,
  document.getElementById('root')
);
