import React, { createContext, useState } from 'react';

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState([]);
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('');
  const [chosenTask, setChosenTask] = useState('');

  return (
    <GlobalStateContext.Provider value={{
      toDoList, setToDoList,
      task, setTask,
      category, setCategory,
      chosenTask, setChosenTask
    }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
