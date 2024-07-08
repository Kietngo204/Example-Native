import {Button, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';

type TodoProps = {
  todos: string[];
  addTodo: any;
};

const TodoList = (todoProps: TodoProps) => {
  console.log('Todo was re-rendered');
  return (
    <View>
      <Text>My todos</Text>
      {todoProps.todos.map((todo, index) => {
        return <Text key={index}>{todo}</Text>;
      })}
      <Button
        title="Add todo"
        onPress={() => {
          todoProps.addTodo();
        }}
      />
    </View>
  );
};

export default memo(TodoList);

const styles = StyleSheet.create({});
