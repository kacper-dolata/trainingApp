import React,{ useState, useEffect} from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import * as Clipboard from 'expo-clipboard';

import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Home({navigation, GlobalState}){
    const { toDoList, setToDoList, task, setTask, setChosenTask } = GlobalState;

    const renderItem = ({item}) => {
        return(
            <TouchableOpacity
                style={styles.task}
                onPress={() => copyToClipboard(item)}
            >
                <Text>{item.task}</Text>
                <View style={styles.icons}>
                    <Icon 
                        name="edit"
                        size={30}
                        color="#141414"
                        onPress={() => handleChooseTask(item)}
                    />
                    <Icon 
                        name="trash"
                        size={30}
                        color="#141414"
                        onPress={() => handleDeleteTask(item.id)}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    const copyToClipboard = async (item) => {
        await Clipboard.setStringAsync(item.task);
      };

    const handleSaveTask = () => {
        const index = toDoList.length + 1;
        
        setToDoList(prevState => [...prevState, {id: index, task: task}])
        
        setTask('');
    }

    const handleChooseTask = (item) => {
        setChosenTask(item);
        navigation.navigate('ChosenTask');
    }

    const handleDeleteTask = (id) => {
        setToDoList(prevState => prevState.filter(task => task.id !== id));
      };

    return(
        <View style = {styles.screen}>
            <Header />
            <View style = {styles.body}>
                <TextInput
                    maxLength={23} 
                    style={styles.input}
                    onChangeText={setTask}
                    value={task}
                    placeholder="To do task..."
                />
                <TouchableOpacity
                style={styles.button}
                onPress={() => handleSaveTask()}
            >
                <Text style={styles.buttonText}>Sumbit</Text>
            </TouchableOpacity>
                <FlatList
                    data={toDoList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <Footer navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        flex: 8,
        width: '100%',
        backgroundColor: '#14141418',
    },
    task: {
        width:'95%',
        flexDirection:'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding: 10,
        margin: 10,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    icons:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    input: {
        backgroundColor: 'white',
        padding: 15,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 10,
        marginTop: 30,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#141414',
        padding: 15,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 10,
        marginBottom: 30,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    buttonText:{
        color: 'white',
        fontWeight: '900'
    }
})