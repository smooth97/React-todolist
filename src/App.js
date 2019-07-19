import React, {useState, useRef} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';


function App() {

  const nextId = useRef(3);

  const [input, setInput] = useState('');

  const [todos, setTodos] = useState(
    [
      {id: 0, text: 'react', checked: false},
      {id: 1, text: 'react', checked: true},
      {id: 2, text: 'react', checked: false},
    ]
  );


  const handleChange = (e) => {
    setInput(e.target.value); // input의 다음 바뀔 값
  }
  
  //const todoInput = useRef();
  //const nextId = useRef(4);

  const handleCreate = () => {
    setInput(''); // 엔터 클릭 시 인풋값 초기화
    const todo = {
      id: nextId.current,
      text: input,
      checked: false
    }
    setTodos(todos.concat(todo));
      nextId.current += 1;
    console.log('handleCreate');
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      handleCreate();
    }
  }

  return (
    <>
      <TodoListTemplate form={(
      <Form
        value={input} //인풋 value값을 초기화시키기 위해 지정
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
      />
      )}>
        <TodoItemList todos={todos}/>
      </TodoListTemplate>
    </>
  )
}

export default App;
