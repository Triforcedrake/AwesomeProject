import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

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
      <View style={styles.container}>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.textHeading}>
            Please Select Preferred Language
          </Text>
        </View>
        <View style={styles.btnContainer}>
          {global.lang.map((item, key) => (
            <View style={styles.userBtn}>
              <Text
                ref={item.shortform}
                onPress={() => this.settext(item.shortform)}>
                {item.longform}
              </Text>
            </View>
          ))}
      </View>
      </View>
    );
  }
}
