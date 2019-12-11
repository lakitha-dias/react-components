import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        text: '',
        isLoggedIn: false
    }
  }

  render() {
    return(
        <View>
          <Text>This is render function</Text>
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
});
