import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('shaun');
  const [age, setAge] = useState('30');
  // const [person, setPerson] = useState({name: 'mario', age: '40'});

  // const clickHandler = () => {
  //   setName('chun-li');
  //   setPerson({name: 'lok', age: '30'});
  // }

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.boldText}>Hello, World!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Somethi<Text>test</Text>ngggggg</Text>
        <Text>Somethingggggg</Text>
        <Text>Somethingggggg</Text>
      </View>
      <Text>My name is {name}</Text> */}
      {/* <Text>His name is {person.name} and his age is {person.age}</Text> */}
      {/* <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
      </View> */}
      {/* <Text>Enter name: </Text>
      <TextInput 
        multiline
        style={styles.input}
        placeHolder='eg: Doo'
        onChangeText={(val) => setName(val)} />

      <Text>Enter age: </Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input}
        placeHolder='eg: 66'
        onChangeText={(val) => setAge(val)} />

      <Text>Name: {name}, Age: {age}</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText:{
    fontWeight: 'bold',
  },
  body:{
    backgroundColor: 'yellow',
    padding: 20,
  },
  buttonContainer:{
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  },
});
