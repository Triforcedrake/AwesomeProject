
import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, ImageBackground, Text, StyleSheet, View, TextInput, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { createStackNavigator, createAppContainer, } from 'react-navigation';


export default class LoginScreen extends Component {

    static navigationOptions = {
        title: 'Login',
        headerRight: <View />
    }

    render() {
        return (
            <ImageBackground source={require('./Images/Dragon.png')}
                style={styles.background}>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
})