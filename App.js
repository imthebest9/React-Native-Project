import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/addTodo';

export default function App() {
  // const [name, setName] = useState('shaun');
  // const [age, setAge] = useState('30');
  // const [person, setPerson] = useState({name: 'mario', age: '40'});
  // const [people, setPeople] = useState([
  //   {name: 'shaun', id: '1'},
  //   {name: 'yama', id: '2'},
  //   {name: 'yoshi', id: '3'},
  //   {name: 'taki', id: '4'},
  //   {name: 'frog', id: '5'},
  //   {name: 'toad', id: '6'},
  //   {name: 'shaunt', id: '7'},
  // ]);

  // const clickHandler = () => {
  //   setName('chun-li');
  //   setPerson({name: 'lok', age: '30'});
  // }

  // const pressHandler = (id) => {
  //   console.log(id);
  //   setPeople((prevPeople) => {
  //     return prevPeople.filter(person => person.id != id)
  //   })
  // }

  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

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
      {/* <ScrollView>
        {people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        )}
      </ScrollView> */}

      {/* <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      /> */}

      <Header />
      <View style={styles.content}>
        <AddTodo />
        <View style={styles.list}>
          <FlatList 
            data = {todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
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
  item: {
    marginTop: 24,
    padding: 40,
    backgroundColor: 'pink',
    fontSize: 28,
    marginHorizontal: 10,
  },
  content: {
    padding: 40,
  },
  list:{
    marginTop: 20,
  }
});
