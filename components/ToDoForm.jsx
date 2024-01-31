import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button
  } from 'react-native';
  
function ToDoForm() {
    return (
        <>
            <View style={styles.form}>
                <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                />
                <Button title="Add" />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    formContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      marginHorizontal: 16,
      marginTop: 16,
    },
    input: {
      flex: 1,
      borderWidth: 2,
      borderColor: '#4CAF50',
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 8,
      marginBottom: 16,
    },
  });
  
export default ToDoForm;

// 
