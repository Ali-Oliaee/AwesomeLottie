import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    width: '90%',
    color: '#ddd',
    height: 54,
    alignSelf: 'center',
    position: 'relative',
  },
  input: {
    height: 54,
    paddingStart: 12,
    fontSize: 18,
    color: '#ddd',
  },
  hideButton: {
    position: 'absolute',
    right: 4,
    top: 0,
    zIndex: 99,
    width: 50,
    height: 50,
  },
  lottie: {
    width: 50,
    height: 50,
  },
});

export default styles;
