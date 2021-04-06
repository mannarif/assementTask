import React from 'react';
import {View} from 'react-native';
import {Title, IconButton} from 'react-native-paper';
import styles from '../../styles';
import {Searchbar} from 'react-native-paper';
import ListView from '../../components/listView';

const List = ({route, navigation}) => {
  const [data, setSearchData] = React.useState({
    list: route.params.data,
    query: '',
  });

  const onChangeSearch = query => {
    let text = query.toLowerCase();
    let fullList = route.params.data;
    let filteredList = [];

    filteredList.categories = fullList.categories.filter(item => {
      if (item.category.categoryName.toLowerCase().match(text)) {
        return item;
      }
    });
    setSearchData({
      list: filteredList,
      query: query,
    });
  };

  return (
    <>
      <View style={[styles.container, styles.listContainer]}>
        <IconButton
          icon="close"
          size={35}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Title style={styles.title}>Approve Food List</Title>
        <Searchbar
          placeholder="Try searching fat, sauces names"
          onChangeText={onChangeSearch}
          value={data.query}
          style={styles.searchBar}
        />
        <ListView list={data.list} />
      </View>
    </>
  );
};

export default List;
