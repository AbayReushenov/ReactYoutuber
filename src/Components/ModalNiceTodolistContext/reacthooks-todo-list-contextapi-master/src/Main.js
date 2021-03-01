import React from 'react';
import FormInput from './components/FormInput'
import List from './components/List'
import Footer from './components/Footer'
import {DataProvider} from './components/DataProvider'
import './Main.css';


function Main() {
  return (
    <DataProvider>
      <div className="Context">
        <h1>To Do List</h1>
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default Main;
