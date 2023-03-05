import React from 'react';
import {
    Alert,
    Button,
    FlatList,
    Image,
    SafeAreaView,
    Text,
    TextInput,
    ToastAndroid,
    TouchableOpacity,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { News } from './android/app/src/components/news/news.js';
import { NavigationContainer } from '@react-navigation/native';
import todoStyles from './css/Todo.css.js';

const colors = { primary: "#1f145c", white: "#fff" }
const Todo = ({ navigation }) => {
    const [textInput, setTextInput] = React.useState('')
    const [todos, setTodo] = React.useState([])

    React.useEffect(() => {
        getTodosFromLocalStorage()
    }, [])

    React.useEffect(() => {
        saveTodostoYourDevice(todos)
    }, [todos])

    const ListItem = ({ todo }) => {
        return <View style={todoStyles.listItems}>
            <View style={{ flex: 1 }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: colors.primary,
                    textDecorationLine: todo?.complete ? 'line-through' : 'none'
                }}>
                    {todo?.task}
                </Text>
            </View>
            {
                !todo?.complete && (
                    <TouchableOpacity
                        style={[todoStyles.actionIcons]}
                        onPress={() => markTodoCompleted(todo?.id)}>
                        <Image source={require('../../../../../assets/icons/check-mark.png')} style={{ zIndex: 9999, justifyContent: 'center', alignItems: 'center', width: 18, height: 18, marginLeft: 3 }} />
                    </TouchableOpacity>
                )
            }
            <TouchableOpacity
                style={[todoStyles.actionIcons, { backgroundColor: 'red' }]}
                onPress={() => deleteTodo(todo?.id)}
            >
                <Image source={require('../../../../../assets/icons/recycle-bin.png')} style={{ zIndex: 9999, justifyContent: 'center', alignItems: 'center', width: 18, height: 18, marginLeft: 3 }} />
            </TouchableOpacity>
        </View>
    }

    const addToDo = () => {
        if (textInput == '') {
            Alert.alert('Please enter todo')
        }
        else {
            const newTodo = {
                id: Math.random(),
                task: textInput,
                complete: false,
            }
            ToastAndroid.show('Todo added successfully.', ToastAndroid.TOP)
            setTodo([newTodo, ...todos])
        }
        setTextInput('')
    }
    const markTodoCompleted = (toDoId) => {
        const newTodos = todos.map((item) => {
            if (item.id === toDoId) {
                ToastAndroid.show('Todo marked as completed.', ToastAndroid.TOP)
                return { ...item, complete: true }
            }
            return item
        })
        setTodo(newTodos)
    }

    const deleteTodo = (toDoId) => {
        const newTodo = todos.filter(item => item.id !== toDoId)
        ToastAndroid.show('Todo removed successfully!...', ToastAndroid.TOP)
        setTodo(newTodo)
    }

    const getTodosFromLocalStorage = async () => {
        try {
            const todos = await AsyncStorage.getItem('todo')
            if (todos) {
                setTodo(JSON.parse(todos))
            }
        } catch (error) {
            console.log(error);
        }
    }

    const saveTodostoYourDevice = async (todo) => {
        try {
            const jsonValue = JSON.stringify(todo)
            const data = await AsyncStorage.setItem('todo', jsonValue)
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
            {/* <View style={todoStyles.header}>
                <View style={{ flexDirection: "row" }}>
                    <Image
                        source={require('../../../../../assets/images/todo.png')}
                        style={{
                            backgroundColor: colors.white,
                            height: 35,
                            width: 35,
                            marginVertical: 20,
                            borderRadius: 30,
                            paddingHorizontal: 20,
                        }} />
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: "black",
                        marginLeft: 10,
                        alignItems: 'center',
                        marginVertical: 25,
                    }}>Todo App..</Text>
                </View>
            </View> */}
            {
                todos?.length < 1 ?
                    (<View style={{
                        width: "100%",
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: "absolute",
                        height: "100%"
                    }}>
                        <Image source={require('../../../../../assets/gifs/todo.gif')} />
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                color: "black",
                            }}
                        >Please enter your task...</Text>
                    </View>)
                    : (
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                padding: 20,
                                paddingBottom: 100,
                            }}
                            data={todos}
                            renderItem={({
                                item
                            }) => <ListItem todo={item} />} />
                    )

            }
            <View style={todoStyles.footer}>
                <View style={todoStyles.inputContainer}>
                    <TextInput
                        style={{ color: 'black' }}
                        placeholder="Add Todo"
                        placeholderTextColor={colors.primary}
                        value={textInput}
                        onChangeText={(text) => {
                            setTextInput(text)
                        }
                        } />
                </View>
                <TouchableOpacity onPress={addToDo} >
                    <View style={todoStyles.iconContainer}>
                        <View style={todoStyles.arrow}>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Todo;
