import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {styles} from '../utils/styles';

class Boarding extends Component {
  render() {
    const goToDropDown = () => {
      this.props.navigation.navigate('SelectedScreen');
    };

    const goToList = () => {
      this.props.navigation.navigate('DiscriptionView');
    };

    return (
      <View style={Styles.container}>
        <TouchableOpacity style={styles.btnStyle} onPress={goToDropDown}>
          <Text style={styles.btnTextStyle}>Go To Dropdown</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle} onPress={goToList}>
          <Text style={styles.btnTextStyle}>Go To List</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Boarding;
