//Just a test screen for now
import React, { Component } from 'react';
import {ImageBackground, View } from 'react-native';

import stringsoflanguages from './Stylesheet/stringsoflanguages';
import styles from './Stylesheet/Style';

export default class LoginScreen extends Component {

    static navigationOptions() {
        return {
        title: stringsoflanguages.titleLogin,
        headerRight: <View />
        };
    };

    render() {
        return (
            <ImageBackground source={require('./Images/Dragon.png')}
                style={styles.background}>
            </ImageBackground>
        );
    }
}
