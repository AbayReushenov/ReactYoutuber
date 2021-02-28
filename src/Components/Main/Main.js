import React, { useState } from 'react';
import ModalMygame from '../ModalMygame/ModalMygame';
function Main() {
  const slovo = [
    {
      a: 'Лев',
      b: 'Семейство кошачих',
    },
    {
      a: 'Муха',
      b: 'Мухобойка',
    },
  ];


  return (
    <div>
      <ModalMygame slovo={slovo} />
    </div>
  );
}

export default Main;
