import React from 'react';
import {View, FlatList} from 'react-native';
import {List} from 'react-native-paper';
import styles from './styles';
import FastImage from 'react-native-fast-image';

const ListView = props => {
  console.log(props.list);
  const ListItem = row => {
    return (
      <View style={styles.cardHeading}>
        <View style={[styles.listHeading]}>
          <List.Item
            title={row.category.categoryName}
            titleStyle={{color: row.category.colorCode}}
            left={iconProps => (
              <View style={styles.imageView}>
                <FastImage
                  style={styles.imageThumb}
                  source={{
                    uri: 'http://placeimg.com/640/480',
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
            )}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.f1}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={props.list.categories}
        renderItem={({item: row}) => ListItem(row)}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ListView;
