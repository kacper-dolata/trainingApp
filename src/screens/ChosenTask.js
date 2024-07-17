import React,{ useContext } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { GlobalStateContext } from '../Context/GlobalStateContext';

export default function ChosenTask({navigation}){
    const {task, setTask, category, setCategory, chosenTask } = useContext(GlobalStateContext);

    const handleUpdateTask = () => {
        chosenTask.task = task;
        chosenTask.category = category;
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
                    placeholder={chosenTask.task}
                />
            <TextInput
                    maxLength={23} 
                    style={styles.input}
                    marginTop={0}
                    onChangeText={setCategory}
                    value={category}
                    placeholder={chosenTask.category}
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
        width: '95%',
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