import React, {useEffect, useRef, useState} from 'react';
import LottieView from 'lottie-react-native';
import eye from '../../assets/lottie/eye.json';
import {TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const PasswordInput = () => {
  const animation = useRef<any>(null);
  const isFirstRunRef = useRef<any>(true);
  const [isHide, setIsHide] = useState<boolean>(true);

  useEffect(() => {
    if (isFirstRunRef.current) {
      if (isHide) {
        animation.current.play(65, 65);
      } else {
        animation.current.play(19, 19);
      }
      isFirstRunRef.current = false;
    } else if (isHide) {
      animation.current.play(65, 65);
    } else {
      animation.current.play(0, 65);
      animation.current.loop = true;
    }
  }, [isHide]);

  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={isHide}
        style={styles.input}
        placeholderTextColor="#ddd"
        placeholder="Password"
      />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setIsHide(!isHide)}
        style={styles.hideButton}>
        <LottieView
          source={eye}
          style={styles.lottie}
          autoPlay={false}
          ref={animation}
          loop={!isHide}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
