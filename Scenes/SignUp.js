
import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, ImageBackground, Text, StyleSheet, View, TextInput, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { createStackNavigator, createAppContainer, } from 'react-navigation';

import styles from './Stylesheet/Style';
import db from '../config/db';


export default class SignUp extends React.Component {

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

