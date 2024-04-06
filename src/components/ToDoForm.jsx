import React, { useState } from 'react'; 
import {
    StyleSheet,
    View,
    TextInput,
    Button
} from 'react-native';

function ToDoForm({ addTask }) {
    const [taskText, setTaskText] = useState(''); 

    return (
        <>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a new task"
                    onChangeText={(text) => setTaskText(text)} 
                    value={taskText} 
                />
                <Button title="Add Task" onPress={() => {
                    addTask(taskText); 
                    setTaskText('');
                }} />
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
