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
    paddingTop: 60,
    fontSize: 22,
    color: '#000',
  },
  homeButton: {
    marginVertical: 20,
    marginBottom: 60,
    alignSelf: 'center',
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 2,
  },
  homeButtonText: {
    color: '#010',
  },
});

export default styles;
