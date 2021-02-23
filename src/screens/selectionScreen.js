import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import {styles} from '../utils/Styles';
import {Dropdown} from '@mopinion-mobile/react-native-material-dropdown';

class SelectedScreen extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: '',
      isVisible: true,
      isTextFeildVisible: false,
    };
  }
  render() {
    let data = [
      {
        value: 'A',
      },
      {
        value: 'B',
      },
      {
        value: 'C',
      },
      {
        value: 'Other',
      },
    ];

    const onChangeValue = (value) => {
      if (value !== 'Other') {
        this.setState({
          selectedOption: value,
          isTextFeildVisible: false,
        });
      } else {
        this.setState({
          selectedOption: '',
          isTextFeildVisible: true,
        });
      }
    };

    const goToBoarding = () => {
      if (!this.state.isVisible && this.state.selectedOption !== '') {
        this.props.navigation.navigate('Boarding');
      }
    };

    return (
      <View style={Styles.conatainer}>
        <View style={Styles.topViewStyle}>
          <Text style={Styles.txtStyle}>{this.state.selectedOption}</Text>
          {this.state.isVisible ? null : (
            <Dropdown
              label={
                this.state.selectedOption === ''
                  ? 'select Option'
                  : this.state.selectedOption
              }
              data={data}
              value={this.state.selectedOption}
              dropdownOffset={{top: 90}}
              pickerStyle={{borderColor: '#000', borderWidth: 1}}
              animationDuration={20}
              labelFontSize={20}
              onChangeText={(value) => onChangeValue(value)}
            />
          )}
          {this.state.isTextFeildVisible ? (
            <TextInput
              placeholder="EnterText"
              style={Styles.textInputStl}
              onChangeText={(text) => this.setState({selectedOption: text})}
            />
          ) : null}
        </View>

        <View style={Styles.BottomViewStl}>
          <View style={Styles.innerBtnView}>
            {this.state.isVisible ? (
              <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => alert('Condtion is Accepted')}>
                <Text style={styles.btnTextStyle}>Accept</Text>
              </TouchableOpacity>
            ) : null}
          </View>
          <View style={Styles.innerBtnView}>
            <TouchableOpacity
              style={styles.btnStyle}
              onPress={() => {
                this.setState({
                  isVisible: false,
                });
                goToBoarding();
              }}>
              <Text style={styles.btnTextStyle}>
                {this.state.isVisible ? 'Reject' : 'Submit'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default SelectedScreen;

const Styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  BottomViewStl: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    padding: 20,
  },
  innerBtnView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topViewStyle: {
    flex: 4,
    backgroundColor: '#ffffff',
    marginTop: 20,
  },
  txtStyle: {
    alignSelf: 'center',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 20,
    fontWeight: 'bold',
    minWidth: 40,
    minHeight: 30,
    backgroundColor: 'lightgray',
  },
  textInputStl: {
    borderWidth: 1,
    borderColor: '#000',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 15,
  },
});
