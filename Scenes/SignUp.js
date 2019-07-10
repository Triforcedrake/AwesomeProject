//Layout for the sign up, still not functional
import React, { Component } from 'react';
import { ImageBackground, Text, View, TextInput, TouchableOpacity, } from 'react-native';

import styles from './Stylesheet/Style';

export default class SignUp extends React.Component {

    static navigationOptions = {
        title: 'Meeting the Dragon',
        headerRight: <View />
    }

    render() {
        return (
            <ImageBackground source={require('./Images/DragonMeeting.png')}
                style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.welcome}>Sign Up here!</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        autoCapitalize="none"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        autoCapitalize="none"
                        secureTextEntry
                    />

                    <TouchableOpacity
                        style={styles.userBtn}
                    >
                        <Text>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

