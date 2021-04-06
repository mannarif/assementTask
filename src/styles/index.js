import {StyleSheet} from 'react-native';
import * as Colors from './theme/color';

export default StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  container: {
    flex: 1,
    fontSize: 20,
    backgroundColor: Colors.backgroundColor,
  },
  f1: {
    flex: 1,
  },
  title: {
    marginBottom: 20,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    padding: 20,
  },
  searchBar: {
    marginBottom: 10,
  },
});
