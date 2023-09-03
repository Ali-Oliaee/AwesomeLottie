import React, {useEffect, useRef, useState} from 'react';
import LottieView from 'lottie-react-native';
import like from '../../assets/lottie/like.json';
import {TouchableWithoutFeedback} from 'react-native';
import styles from './styles';

const LikeButton = () => {
  const animation = useRef<any>(null);
  const isFirstRunRef = useRef<any>(true);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    if (isFirstRunRef.current) {
      if (isLiked) {
        animation.current.play(66, 66);
      } else {
        animation.current.play(19, 19);
      }
      isFirstRunRef.current = false;
    } else if (isLiked) {
      animation.current.play(19, 50);
    } else {
      animation.current.play(0, 19);
    }
  }, [isLiked]);

  return (
    <TouchableWithoutFeedback onPress={() => setIsLiked(!isLiked)}>
      <LottieView
        source={like}
        style={styles.lottie}
        autoPlay={false}
        ref={animation}
        loop={false}
      />
    </TouchableWithoutFeedback>
  );
};

export default LikeButton;
