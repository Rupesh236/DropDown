import React, {Component} from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {userData} from './../utils/rawData';
import ListItem from './../components/listItem';

class DiscriptionView extends Component {
  constructor() {
    super();
    this.state = {
      selectedData: '',
    };
  }

  showDiscription = (Id) => {
    if (this.state.selectedData.id === Id) {
      return <Text>{this.state.selectedData.discrption}</Text>;
    }
  };

  renderUserList = ({item}) => {
    return (
      <ListItem>
        <TouchableOpacity
          style={Styles.itemStyle}
          onPress={() =>
            this.setState({
              selectedData: item,
            })
          }>
          <Text>{item.Name}</Text>
          {this.showDiscription(item.id)}
        </TouchableOpacity>
      </ListItem>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={userData}
          keyExtractor={(Data) => Data.id}
          renderItem={this.renderUserList}
        />
      </View>
    );
  }
}

export default DiscriptionView;

const Styles = StyleSheet.create({
  itemStyle: {
    flex: 1,
    padding: 10,
    width: null,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  nameTxtStyle: {
    fontSize: 20,
    fontWeight: '500',
  },
});
