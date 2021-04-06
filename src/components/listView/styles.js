import {StyleSheet} from 'react-native';
import * as Colors from '../../styles/theme/color';
import appStyles from '../../styles';

export default StyleSheet.create({
  listHeading: {
    padding: 2,
    backgroundColor: Colors.primaryColor,
    marginBottom: 10,
  },
  imageView: {
    justifyContent: 'center',
  },
  imageThumb: {
    width: 30,
    height: 30,
  },
  f1: {
    ...appStyles.f1,
  },
});
