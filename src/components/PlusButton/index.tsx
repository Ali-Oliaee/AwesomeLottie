import React, {useEffect, useRef, useState} from 'react';
import LottieView from 'lottie-react-native';
import plus from '../../assets/lottie/plus.json';
import {TouchableWithoutFeedback} from 'react-native';
import styles from './styles';

const PlusButton = () => {
  const animation = useRef<any>(null);
  const isFirstRunRef = useRef<any>(true);
  const [isPlus, setIsPlus] = useState<boolean>(false);

  useEffect(() => {
    if (isFirstRunRef.current) {
      if (isPlus) {
        animation.current.play(21, 21);
      } else {
        animation.current.play(19, 19);
      }
      isFirstRunRef.current = false;
    } else if (isPlus) {
      animation.current.play(19, 50);
    } else {
      animation.current.play(0, 19);
    }
  }, [isPlus]);

  return (
    <TouchableWithoutFeedback onPress={() => setIsPlus(!isPlus)}>
      <LottieView
        source={plus}
        style={styles.lottie}
        autoPlay={false}
        ref={animation}
        loop={false}
      />
    </TouchableWithoutFeedback>
  );
};

export default PlusButton;
