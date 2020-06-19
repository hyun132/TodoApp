import React , { useState } from 'react';
import {StyleSheet,Text,View,TextInput,Button} from 'react-native';

export default function AddTodo({submitHandler}){

    const [text , setText]=useState('');

    const changeHandler = (val)=>{
        setText(val);
    }

    return (
        <View>
        <TextInput
            style={StyleSheet.input}
            placeholder = 'new todo...'
            // onChangeText={(val) => changeHandler(val)}
            // 같은표현..?
            onChangeText={ changeHandler}
        />
        <Button onPress={()=> submitHandler(text)} title='add todo' color='coral'/>
    </View>
    )
}

const style=StyleSheet.create({
    input: {
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
    }
})