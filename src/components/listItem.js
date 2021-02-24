import React from 'react';
import {View, StyleSheet} from 'react-native';

function ListItem(Props) {
  return <View style={styles.conatiner}>{Props.children}</View>;
}

export default ListItem;

const styles = StyleSheet.create({
  conatiner: {
    // marginVertical: 5,
    padding: 10,
    marginHorizontal: 5,
    elevation: 2,
  },
});
