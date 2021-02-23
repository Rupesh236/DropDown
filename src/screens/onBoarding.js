import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {styles} from '../utils/Styles';

class Boarding extends Component {
  render() {
    const goToNext = () => {
      this.props.navigation.navigate('SelectedScreen');
    };
    return (
      <View style={Styles.container}>
        <TouchableOpacity style={styles.btnStyle} onPress={goToNext}>
          <Text style={styles.btnTextStyle}>Go To Next</Text>
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
