import {navigate} from '../../navigation/navigationRef';
import {fetchList} from '../../services';
import {setItemAsync} from '../../utilities/storage';

export const getList = async () => {
  try {
    const listData = await fetchList();
    if (listData) {
      setItemAsync('list', JSON.stringify(listData)).then(done => {
        navigate('List', {data: listData});
      });
    }
  } catch (e) {
    console.log('Error while fetching list', e);
  }
};
