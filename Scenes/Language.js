import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';

import stringsoflanguages from './Stylesheet/stringsoflanguages';
import styles from './Stylesheet/Style';

export default class Language extends React.Component {
  constructor(props) {
    super(props);
    const lang = [
      { shortform: 'en', longform: 'English' },
      { shortform: 'dk', longform: 'Danish' },
    ];
    global.lang = lang;
  }
  settext(value) {
    stringsoflanguages.setLanguage(value);
    this.props.navigation.navigate('Home' , {JSON_Clicked_Item:value,});
  }
  render() {
    return (
      <ImageBackground source={require('./Images/DragonMountain.png')}
          style={styles.background}>
      <View style={styles.container}>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.welcome}>
            Please Select Preferred Language
          </Text>
        </View>
        <View style={[styles.btnContainer, {marginTop: 25}]}>
          {global.lang.map((item, key) => (
             <TouchableOpacity  
             ref={item.shortform}
             onPress={() => this.settext(item.shortform)}
             style={styles.userBtn}>
              <Text>
                {item.longform}
              </Text>
            </TouchableOpacity>
          ))}
      </View>
      </View>
      </ImageBackground>
    );
  }
}
