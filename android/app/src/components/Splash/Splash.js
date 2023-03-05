import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import splashStyles from './css/Splash.css';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);

  return (
    <View style={splashStyles.container}>
      <Text style={{color:'white',fontSize:30}}>
        Hello...
      </Text>
      <FastImage
      source={require('../../../../../assets/gifs/PYBr.gif')}
      style={splashStyles.image}
      resizeMode={FastImage.resizeMode.contain}
    />
    </View>
  );
};



export default Splash;
