import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { View , Text , Button } from 'react-native';

const AboutScreen = ({navigation}) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold' , color:'red'}}>Welcome ToDo List Application</Text>
          <Text style={{fontSize: 20 , color:'red'}}>A simple ToDO list Spplication created by Yash Hingu</Text>
          <Text style={{fontSize: 20, color: 'black' }}>Date: {currentDate}</Text>  
        </View>
        <View style={{marginTop: 20}}>
          <Button title="Back to Home Screen" onPress={() => navigation.navigate('HomeScreen')} />
        </View >
    </MainLayout>
  );
};

export default AboutScreen;