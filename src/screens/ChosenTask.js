import React,{ useState, useEffect} from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function ChosenTask({navigation, GlobalState, handleSaveTask}){
    const {task, setTask, chosenTask } = GlobalState;

    const handleUpdateTask = () => {
        chosenTask.task = task;
        setTask('');
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
                    placeholder={chosenTask.task}
                />
                <TouchableOpacity
                style={styles.button}
                onPress={() => handleUpdateTask()}
            >
                <Text style={styles.buttonText}>Save</Text>
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
        backgroundColor: '#14141405',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        backgroundColor: 'white',
        width: '95%',
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