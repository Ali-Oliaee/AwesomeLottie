import React from 'react';
import BearScreen from './components/BearScreen';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import LikeButton from './components/LikeButton';
import styles from './styles';
import PlayButton from './components/PlayButton';

function App(): JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Text style={styles.title}>Awesome Lottie Animations</Text>
      <BearScreen />
      <View style={styles.row}>
        <LikeButton />
        <PlayButton />
      </View>
    </ScrollView>
  );
}

export default App;
