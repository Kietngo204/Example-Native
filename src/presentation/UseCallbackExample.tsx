import {useCallback, useState} from 'react';
import {Button, Text} from 'react-native';
import TodoList from './TodoList';

const initTodos: string[] = [];
export const UseCallBackExample = () => {
  const [todos, setTodos] = useState(initTodos);
  const [count, setCount] = useState(0);

  console.log('UseCallbackExample was re-rendered');
  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos(t => [...t, 'New Todo' + count]);
  }, [todos]);

  return (
    <>
      <TodoList todos={todos} addTodo={addTodo} />
      <Text>Count: {count}</Text>
      <Button title="+" onPress={() => increment()} />
    </>
  );
};
