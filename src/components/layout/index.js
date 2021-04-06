import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from '../../styles';

const Layout = props => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>{props.children}</View>
    </SafeAreaView>
  );
};

export default Layout;
