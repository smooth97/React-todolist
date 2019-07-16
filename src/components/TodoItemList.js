import React from 'react';
import TodoItem from './TodoItem';

const TodoItemList = ({todos, onToggle, onRemove}) => {
    
    return (
        <div>
            <TodoItem text="Hello"/>
            <TodoItem text="React"/>
            <TodoItem text="Component"/>
        </div>
    );
};

export default TodoItemList;