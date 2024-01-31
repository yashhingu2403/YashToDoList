import React from 'react';
import {
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
  } from 'react-native';
  
function ToDoList() {
  return (
    <>
      <ScrollView>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Do Prayer</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>Hangout with friends</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>playing games</Text>
          </View>
        </Pressable>
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
  completed: {
    backgroundColor: '#d3d3d3',
  },
  taskText: {
    fontSize: 18,
    color: '#333',
  },
});
export default ToDoList;


