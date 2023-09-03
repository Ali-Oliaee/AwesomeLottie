import React, {useEffect, useRef, useState} from 'react';
import LottieView from 'lottie-react-native';
import theme from '../../assets/lottie/theme-switch2.json';
import {TouchableWithoutFeedback} from 'react-native';
import styles from './styles';

const ThemeSwitch2 = ({
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
        animation.current.play(288, 288);
      } else {
        animation.current.play(6, 6);
      }
      isFirstRunRef.current = false;
    } else if (isDark) {
      animation.current.play(6, 288);
      setTheme('Dark');
    } else {
      animation.current.play(200, 6);
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
        speed={1.9}
      />
    </TouchableWithoutFeedback>
  );
};

export default ThemeSwitch2;
