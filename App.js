
import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, ImageBackground, Text, StyleSheet, View, TextInput, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { createStackNavigator, createAppContainer, } from 'react-navigation';

import MapScreen from './Scenes/Map';
import LoginScreen from './Scenes/Login';
import SignUpScreen from './Scenes/SignUp';
import AddItemScreen from './Scenes/AddItem';
import ListItemScreen from './Scenes/ListItem';
import styles from './Scenes/Stylesheet/Style';
import db from './config/db';

class HomeScreen extends Component {

    render() {
        return (
            <ImageBackground source={require('./Scenes/Images/DragonCave.png')}
                style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.welcome}>Welcome to the Dragon's Cave</Text>

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
                    <View style={styles.btnContainer}>
                        <TouchableOpacity
                            style={styles.userBtn}
                            onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <Text>Enter</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.userBtn}
                            onPress={() => this.props.navigation.navigate('SignUp')}
                        >
                            <Text>Sign Up</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ padding: 5, }}>
                    </View>

                    <View style={styles.btnContainer}>
                        <TouchableOpacity
                            style={styles.userBtn}
                            onPress={() => this.props.navigation.navigate('AddItem')}
                        >
                            <Text>Add Item</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.userBtn}
                            onPress={() => this.props.navigation.navigate('ListItem')}
                        >
                            <Text>List Item</Text>
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity
                        style={styles.mapBtn}
                        onPress={() => this.props.navigation.navigate('Map')}
                    >
                        <Text>Map</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}


const Rootstack = createStackNavigator(
    {
        Home: HomeScreen,
        Map: MapScreen,
        SignUp: SignUpScreen,
        Login: LoginScreen,
        AddItem: AddItemScreen,
        ListItem: ListItemScreen
    },
    {
        initialRouteName: 'Home',
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

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
    'AwesomeProject',
    () => App);
