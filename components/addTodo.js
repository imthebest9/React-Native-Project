import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddTodo(){
    const [text, setText] = useState('');

    const changeHandler = (val) =>{
        setText(val);
    }

    return(
        <View>
            <TextInput 
                style = {styles.input}
                placeHolder='new todo...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => console.log(text)} title='add todo' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
})