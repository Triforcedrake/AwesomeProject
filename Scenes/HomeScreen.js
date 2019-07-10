import React, { Component } from 'react';
import { ImageBackground, Text, View, TextInput, TouchableOpacity } from 'react-native';
import stringsoflanguages from './stringsoflanguages';

import styles from './Stylesheet/Style';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Main',
    }

    render() {
        return (
            <ImageBackground source={require('./Images/DragonCave.png')}
                style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.welcome}>{stringsoflanguages.header1}</Text>

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

                    <View style={{ flex: 5, }}>
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

                    <View style={{ padding: 12, }}>
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