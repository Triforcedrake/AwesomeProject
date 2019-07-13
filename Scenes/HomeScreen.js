import React, { Component } from 'react';
import { ImageBackground, Text, View, TextInput, TouchableOpacity } from 'react-native';

import stringsoflanguages from './Stylesheet/stringsoflanguages';
import styles from './Stylesheet/Style';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: stringsoflanguages.header1,
        headerRight: <View />
    }

    render() {
        return (
            <ImageBackground source={require('./Images/DragonCave.png')}
                style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.welcome}>{stringsoflanguages.header2}</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={stringsoflanguages.password}
                        autoCapitalize="none"
                        secureTextEntry
                    />
                    <View style={styles.btnContainer}>
                        <TouchableOpacity
                            style={styles.userBtn}
                            onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <Text>{stringsoflanguages.enter}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.userBtn}
                            onPress={() => this.props.navigation.navigate('SignUp')}
                        >
                            <Text>{stringsoflanguages.signUp}</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={[styles.btnContainer, {marginTop: 10}]}>
                        <TouchableOpacity
                            style={styles.userBtn}
                            onPress={() => this.props.navigation.navigate('AddItem')}
                        >
                            <Text>{stringsoflanguages.itemAdd}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.userBtn}
                            onPress={() => this.props.navigation.navigate('ListItem')}
                        >
                            <Text>{stringsoflanguages.itemList}</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ padding: 12, }}>
                    </View>

                    <TouchableOpacity
                        style={styles.mapBtn}
                        onPress={() => this.props.navigation.navigate('Map')}
                    >
                        <Text>{stringsoflanguages.map}</Text>
                    </TouchableOpacity>
                   
                </View>
            </ImageBackground>
        );
    }
}