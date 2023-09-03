import React, {useState} from 'react';
import BearScreen from './components/BearScreen';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import LikeButton from './components/LikeButton';
import styles from './styles';
import PlayButton from './components/PlayButton';
import PlusButton from './components/PlusButton';
import ThemeButton from './components/ThemeButton';

function App(): JSX.Element {
  const [theme, setTheme] = useState<'Dark' | 'Light'>('Dark');

  return (
    <ScrollView
      style={[styles.container, theme === 'Dark' && styles.darkTheme]}>
      <StatusBar
        backgroundColor={theme === 'Dark' ? '#455' : '#fff'}
        barStyle="dark-content"
      />
      <Text style={[styles.title, theme === 'Dark' && styles.darkTheme]}>
        Awesome Lottie Animations
      </Text>
      <BearScreen />
      <View style={styles.row}>
        <LikeButton />
        <PlayButton />
        <PlusButton />
        <ThemeButton setTheme={setTheme} />
      </View>
      <View style={styles.row} />
    </ScrollView>
  );
}

export default App;
