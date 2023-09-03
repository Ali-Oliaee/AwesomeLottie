import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  darkTheme: {
    backgroundColor: '#040D12',
    color: '#fff',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
  title: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 22,
    color: '#000',
  },
});

export default styles;
