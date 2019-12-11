import React from 'react';
import { StyleSheet, Text, View , Button, TouchableOpacity, Touchable} from 'react-native';
import {Alert} from "react-native-web";

export default class App extends React.Component{

  myButtonPressed() {
    Alert.alert("Logout");
  }
  render() {
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this.myButtonPressed()}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "#FFFFFF",
    borderRadius: 10
  }
});
