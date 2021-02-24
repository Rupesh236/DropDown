import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Boarding from './src/screens/onBoarding';
import SelectedScreen from './src/screens/selectionScreen';
import DiscriptionView from './src/screens/discriptionView';

const stack = createStackNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name="Boarding"
            component={Boarding}
            options={{
              title: 'Home',
              // headerStyle: {
              //   justifyContent: 'center',
              // },
            }}
          />
          <stack.Screen
            name="SelectedScreen"
            component={SelectedScreen}
            options={{
              title: 'Options',
              // headerStyle: {
              //   justifyContent: 'center',
              // },
            }}
          />
          <stack.Screen
            name="DiscriptionView"
            component={DiscriptionView}
            options={{
              title: 'Options',
              // headerStyle: {
              //   justifyContent: 'center',
              // },
            }}
          />
        </stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
