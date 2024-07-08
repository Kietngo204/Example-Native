import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import TodoList from '../TodoList';

const initTodo: string[] = [];
export const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(initTodo);
  let startTime = Date.now();
  const result = useMemo(() => expensiveCalculation(count), [count]);
  let endTime = Date.now();
  console.log('calculation time:', endTime - startTime);
  const increment = () => {
    setCount(c => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos(t => [...t, 'New Todo' + count]);
  }, [todos]);
  return (
    <>
      <TodoList addTodo={addTodo} todos={todos} />
      <View>
        <Text> Count: {count}</Text>
        <Text> Result: {result}</Text>
        <Button title="+" onPress={() => increment()} />
      </View>
    </>
  );
};

const expensiveCalculation = (num: number) => {
  console.log('Calculating...');
  for (let index = 0; index < 100000000; index++) {
    num += 1;
  }
  return num;
};

const styles = StyleSheet.create({});
