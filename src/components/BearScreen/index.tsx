import React from 'react';
import LottieView from 'lottie-react-native';
import bear from '../../assets/lottie/bear.json';
import styles from './styles';

const BearScreen = () => {
  return <LottieView source={bear} style={styles.lottie} loop autoPlay />;
};

export default BearScreen;
