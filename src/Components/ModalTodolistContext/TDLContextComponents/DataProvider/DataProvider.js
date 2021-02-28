import React, { useState, useEffect, createContext } from 'react';
import uniqid from 'uniqid';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [dela, updateDela ] = useState([]);
  
  useEffect(()=>{
    const storeDela = JSON.parse(localStorage.getItem('storeDela'));
    if (storeDela) updateDela(storeDela);
  },[]);

  useEffect(()=>{
    localStorage.setItem('storeDela', JSON.stringify(dela))
  },[dela]);


  return (
    <DataContext.Provider value={[dela, updateDela ]}>
      {props.children}
    </DataContext.Provider>
  );
};
