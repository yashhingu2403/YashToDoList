import React from 'react';
import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <>
      <ScrollView>
        {tasks.map((task, index) => (
          <Pressable key={index}>
            <View style={styles.task}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 15,
    borderBottomWidth: 2,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginVertical: 5,
  },
  taskText: {
    fontSize: 18,
    color: '#333',
  },
});

export default ToDoList;
