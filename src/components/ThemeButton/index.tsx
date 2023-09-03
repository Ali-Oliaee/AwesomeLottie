import React, {useEffect, useRef, useState} from 'react';
import LottieView from 'lottie-react-native';
import theme from '../../assets/lottie/theme.json';
import {TouchableWithoutFeedback} from 'react-native';
import styles from './styles';

const ThemeButton = ({
  setTheme,
}: {
  setTheme: (theme: 'Dark' | 'Light') => {};
}) => {
  const animation = useRef<any>(null);
  const isFirstRunRef = useRef<any>(true);
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    if (isFirstRunRef.current) {
      if (isDark) {
        animation.current.play(99, 99);
      } else {
        animation.current.play(40, 40);
      }
      isFirstRunRef.current = false;
    } else if (isDark) {
      animation.current.play(40, 99);
      setTheme('Dark');
    } else {
      animation.current.play(99, 40);
      setTheme('Light');
    }
  }, [isDark, setTheme]);

  return (
    <TouchableWithoutFeedback onPress={() => setIsDark(!isDark)}>
      <LottieView
        source={theme}
        style={styles.lottie}
        autoPlay={false}
        ref={animation}
        loop={false}
      />
    </TouchableWithoutFeedback>
  );
};

export default ThemeButton;
