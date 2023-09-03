import React, {useEffect, useRef, useState} from 'react';
import LottieView from 'lottie-react-native';
import theme from '../../assets/lottie/theme-switch1.json';
import {TouchableWithoutFeedback} from 'react-native';
import styles from './styles';

const ThemeSwitch1 = ({
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
        animation.current.play(78, 78);
      } else {
        animation.current.play(10, 10);
      }
      isFirstRunRef.current = false;
    } else if (isDark) {
      animation.current.play(10, 78);
      setTheme('Dark');
    } else {
      animation.current.play(78, 10);
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

export default ThemeSwitch1;
