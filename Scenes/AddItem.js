//Adds item to firebase list
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { addItem } from '../services/ItemService';

import stringsoflanguages from './Stylesheet/stringsoflanguages';
import styles from './Stylesheet/Style';


export default class AddItem extends Component {

    static navigationOptions = {
        title: 'Add Treasure',
        headerRight: <View />
    }

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            error: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            name: e.nativeEvent.text
        });
    }
    handleSubmit() {
        addItem(this.state.name);
        Alert.alert(
            "Item added"
        );
    }
    render() {
        return (
            <ImageBackground source={require('./Images/DragonOnTreasure.png')}
                style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.welcome}>{stringsoflanguages.AddTitle}</Text>
                    <TextInput
                        style={styles.input}
                        onChange={this.handleChange}
                    />
                    <TouchableOpacity
                        style={styles.userBtn}
                        underlayColor="white"
                        onPress={this.handleSubmit}
                    >
                        <Text
                            style={styles.buttonText}>
                             {stringsoflanguages.AddButton}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

