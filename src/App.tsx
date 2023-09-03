import React, {useState} from 'react';
import BearScreen from './components/BearScreen';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import LikeButton from './components/LikeButton';
import styles from './styles';
import PlayButton from './components/PlayButton';
import PlusButton from './components/PlusButton';
import ThemeButton from './components/ThemeButton';
import ThemeSwitch1 from './components/ThemeSwitch1';
import ThemeSwitch2 from './components/ThemeSwitch2';

function App(): JSX.Element {
  const [theme, setTheme] = useState<'Dark' | 'Light'>('Dark');
  const [bearDance, setBearDance] = useState<boolean>(true);

  return (
    <ScrollView
      style={[styles.container, theme === 'Dark' && styles.darkTheme]}>
      <StatusBar
        backgroundColor={theme === 'Dark' ? '#040D12' : '#fff'}
        barStyle={theme === 'Light' ? 'dark-content' : 'light-content'}
      />
      <Text style={[styles.title, theme === 'Dark' && styles.darkTheme]}>
        Awesome Lottie Animations
      </Text>
      <BearScreen isDancing={bearDance} />
      <View style={styles.row}>
        <LikeButton />
        <PlayButton setBearDance={setBearDance} />
        <PlusButton />
        <ThemeButton setTheme={setTheme} />
      </View>
      <View style={styles.row}>
        <ThemeSwitch1 setTheme={setTheme} />
        <ThemeSwitch2 setTheme={setTheme} />
      </View>
    </ScrollView>
  );
}

export default App;
