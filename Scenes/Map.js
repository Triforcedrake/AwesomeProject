import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text, StyleSheet, View, TextInput, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
//import { createStackNavigator, createAppContainer, } from 'react-navigation';
import MapView from 'react-native-maps';


export default class MapScreen extends Component {


    static navigationOptions = {
        title: 'Map',
        headerRight: <View />
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.map}
                    region={{
                        latitude: 55.396229,
                        longitude: 10.390600,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1,              
                    }}
                >
                    <MapView.Marker 
                        coordinate={{
                            latitude: 55.396229,
                            longitude: 10.390600,
                        }}
                        title={'Home'}
                        description={'My home town'}
                    />
                </MapView>            
            </View>
        )

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0, 
        right: 0, 
        justifyContent: 'flex-end', 
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0, 
    },
});