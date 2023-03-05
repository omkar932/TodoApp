import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={todo}
        onChangeText={setTodo}
        placeholder="Add Todo"
      />
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableOpacity>
      {todos.map((t, index) => (
        <View key={index} style={styles.todoContainer}>
          <Text style={styles.todoText}>{t}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 15,
    width: '50%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  todoContainer: {
    backgroundColor: '#ddd',
    marginTop: 10,
    padding: 10,
    width: '80%',
  },
  todoText: {
    fontSize: 20,
  },
});

export default TodoList;
