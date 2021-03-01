/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import ListItem from '../ListItem/ListItem';
import { DataContext } from '../DataProvider/DataProvider';

export default function ContextList() {
  const [dela, updateDela] = useContext(DataContext);

  const handlerCheckStatus = (id) => {
    const newDela = [...dela];
    newDela.forEach((odnodelo) => {
      if (odnodelo.key === id) {
        odnodelo.status = !odnodelo.status;
      }
    });
    updateDela(newDela);
  };

  const handlerEditOdnoDelo = (editvalue, id) => {
    const newDela = [...dela];
    newDela.forEach((odnodelo) => {
      if (odnodelo.key === id) {
        odnodelo.name = editvalue;
      }
    });
    updateDela(newDela);
  };

  return (
    <ul>
      {dela.map((odnodelo) => (
        <ListItem
          odnodelo={odnodelo}
          key={odnodelo.key}
          id={odnodelo.key}
          handlerCheckStatus={handlerCheckStatus}
          handlerEditOdnoDelo={handlerEditOdnoDelo}
        />
      ))}
    </ul>
  );
}
