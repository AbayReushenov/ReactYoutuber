import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import List from './Components/List/index';
import Form from './Components/Form/index';

export default function Main() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <Form />
        <List />
      </div>
    </Provider>
  );
}
