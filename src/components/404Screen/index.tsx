import React from 'react';
import LottieView from 'lottie-react-native';
import bot from '../../assets/lottie/bot.json';
import styles from './styles';
import {Text, TouchableOpacity, View} from 'react-native';

const NotFound = ({onBack}) => {
  return (
    <View style={styles.container}>
      <LottieView source={bot} style={styles.lottie} loop={false} autoPlay />
      <TouchableOpacity style={styles.homeButton} onPress={onBack}>
        <Text style={styles.homeButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotFound;
