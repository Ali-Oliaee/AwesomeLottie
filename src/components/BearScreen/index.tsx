import React from 'react';
import LottieView from 'lottie-react-native';
import bear from '../../assets/lottie/bear.json';
import styles from './styles';

const BearScreen = ({isDancing}: {isDancing: boolean}) => {
  return (
    <LottieView
      source={bear}
      style={styles.lottie}
      loop
      autoPlay
      speed={isDancing ? 0.8 : 0}
    />
  );
};

export default BearScreen;
