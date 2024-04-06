import React from 'react';
import { Button, SafeAreaView, View , Text} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from "../components/ToDoForm";

import MainLayout from '../layouts/MainLayout';


const HomeScreen = ( {navigation}) =>{

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  const [tasks , setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <MainLayout >
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm  addTask={addTask} />
        <View style={styles.button}>
            <Button 
                    title="About" 
                    onPress={() => navigation.navigate('AboutScreen')} 
                    color={'#4CAF50'}
                />
        </View> 
     </SafeAreaView>
    </MainLayout>
  );
}

export default HomeScreen;