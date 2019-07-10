
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStackNavigator, createAppContainer, } from 'react-navigation';

import HomeScreen from './Scenes/HomeScreen'; 
import MapScreen from './Scenes/Map';
import LoginScreen from './Scenes/Login';
import SignUpScreen from './Scenes/SignUp';
import AddItemScreen from './Scenes/AddItem';
import ListItemScreen from './Scenes/ListItem';
import LanguageScreen from './Scenes/Language';

//Sets up our navigation stack for moving between the various screens. 
const Rootstack = createStackNavigator(
    {
        Language: LanguageScreen,
        Home: HomeScreen,
        Map: MapScreen,
        SignUp: SignUpScreen,
        Login: LoginScreen,
        AddItem: AddItemScreen,
        ListItem: ListItemScreen
    },
    {
        initialRouteName: 'Language',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#1e90ff'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                textAlign: 'center',
                flex: 1
            }
        }
    }
);

const AppContainer = createAppContainer(Rootstack);

export default class App extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

AppRegistry.registerComponent(
    'AwesomeProject',
    () => App);
