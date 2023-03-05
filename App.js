import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todo from './android/app/src/components/todo/Todo.js';
import News from './android/app/src/components/news/News.js';
import Home from './android/app/src/components/Home/Home.js';
import Splash from './android/app/src/components/Splash/Splash.js';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Todos"
          component={Todo}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="News"
          component={News}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;