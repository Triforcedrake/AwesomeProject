//Lists the items on the firebase database
import React, { Component } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import ItemComponent from '../components/ItemComponent';

import stringsoflanguages from './Stylesheet/stringsoflanguages';
import styles from './Stylesheet/Style';

//Importing the firebase database information 
import { db } from '../config/db';

let itemsRef = db.ref('/items');

export default class ListItem extends Component {

    static navigationOptions() {
        return {
        title: stringsoflanguages.titleList,
        headerRight: <View />
        };
    };
    
    state = {
        items: []
    }

    componentDidMount() {
        itemsRef.on('value', (snapshot) => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
        });
    }

    render() {
        return (
            <ImageBackground source={require('./Images/DragonTreasure.png')}
                style={styles.background}>
                <View style={styles.container}>
                    {
                        this.state.items.length > 0
                            ? <ItemComponent items={this.state.items} />
                            : <Text>No items</Text>
                    }
                </View>
            </ImageBackground>
        )
    }
}