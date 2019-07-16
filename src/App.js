import React from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';


function App() {

  let id = 3;

  const state = {
    input: '',
    todos: [
      {id: 0, text: 'react', checked: false},
      {id: 1, text: 'react', checked: true},
      {id: 2, text: 'react', checked: false},
    ]
  };

  const handleChange = (e) => {
    
  }

  return (
    <>
      <TodoListTemplate form={<Form/>}>
        <TodoItemList/>
      </TodoListTemplate>
    </>
  )
}

export default App;
