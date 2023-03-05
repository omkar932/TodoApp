import { AppBar } from '@react-native-material/core'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-elements'
import { Image } from 'react-native-elements/dist/image/Image'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeStyle from './css/Home.css'
const colors = { primary: "#1f145c", white: "#fff" }
const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={{flex:1,}}>
            <AppBar title="Home" />
        <SafeAreaView style={{alignItems:'center',height:'100%',justifyContent:'center',flexDirection:'column',backgroundColor:'#fff'}}>
            <Image source={require('../../../../../assets/gifs/todo.gif')} style={{width:300,height:200}}/>
            <TouchableOpacity onPress={() => navigation.navigate('Todos')}  >
                <View style={[HomeStyle.iconContainer, { pointerEvents: 'none' }]}>
                    <Text style={{color:'#fff',fontSize:20}}>Create Todo</Text>
                </View>
            </TouchableOpacity>
            <Image source={require('../../../../../assets/icons/newspaper.png')} style={{marginVertical:20,width:100,height:100}}/>
            <TouchableOpacity onPress={() => navigation.navigate('News')}  >
                <View style={[HomeStyle.iconContainer, { pointerEvents: 'none' }]}>
                        <Text style={{color:'#fff',fontSize:20}}>Read News</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>

        </SafeAreaView>
    )
}



export default Home;