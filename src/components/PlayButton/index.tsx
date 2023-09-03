import React, {useEffect, useRef, useState} from 'react';
import LottieView from 'lottie-react-native';
import play from '../../assets/lottie/play.json';
import {TouchableWithoutFeedback} from 'react-native';
import styles from './styles';

const PlayButton = ({setBearDance}: {setBearDance: (dance: boolean) => {}}) => {
  const animation = useRef<any>(null);
  const isFirstRunRef = useRef<any>(true);
  const [isPlayed, setIsPlayed] = useState<boolean>(false);

  useEffect(() => {
    if (isFirstRunRef.current) {
      if (isPlayed) {
        animation.current.play(21, 21);
      } else {
        animation.current.play(19, 19);
      }
      isFirstRunRef.current = false;
    } else if (isPlayed) {
      animation.current.play(19, 50);
      setBearDance(true);
    } else {
      animation.current.play(0, 19);
      setBearDance(false);
    }
  }, [isPlayed, setBearDance]);

  return (
    <TouchableWithoutFeedback onPress={() => setIsPlayed(!isPlayed)}>
      <LottieView
        source={play}
        style={styles.lottie}
        autoPlay={false}
        ref={animation}
        loop={false}
      />
    </TouchableWithoutFeedback>
  );
};

export default PlayButton;
