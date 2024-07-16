import React,{ useState, useEffect} from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function AddTask({navigation, GlobalState}){
    const { toDoList, setToDoList, task, setTask, category, setCategory} = GlobalState;

    const handleSaveTask = () => {
        const index = toDoList.length + 1;
        
        setToDoList(prevState => [...prevState, {id: index, task: task, category: category}])
        
        setTask('');
        setCategory('');

        navigation.navigate('Home')
    }

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
                <TextInput
                    maxLength={23} 
                    style={styles.input}
                    marginTop={10}
                    onChangeText={setCategory}
                    value={category}
                    placeholder="Category..."
                />
                <TouchableOpacity
                style={styles.button}
                onPress={() => handleSaveTask()}
            >
                <Text style={styles.buttonText}>Sumbit</Text>
            </TouchableOpacity>
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