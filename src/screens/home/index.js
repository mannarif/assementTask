import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../../styles';
import {navigate} from '../../navigation/navigationRef';
import {getItemAsync} from '../../utilities/storage';
import {getList} from './model';

const Home = () => {
  return (
    <View style={[styles.container, styles.center]}>
      <Button
        mode="contained"
        onPress={() => {
          // Check if list is available in location storage
          getItemAsync('list').then(list => {
            if (list) {
              navigate('List', {data: JSON.parse(list)});
            } else {
              getList();
            }
          });
        }}>
        Approved Foods List
      </Button>
    </View>
  );
};

export default Home;
