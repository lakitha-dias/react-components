import React from 'react';

// import components
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        text: ""
    }
  }

  render() {
    return(
        <View style={"styles.container"}>
          <TextInput
              style={styles.input}
              placeholderTextColor={"#c1c1c1"}
              placeholder={"Enter value here.."}
              onChangeText={
                (text) => {
                  this.setState({
                    text:text
                  })
                }
              }
          />
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  input: {
    marginTop: 40,
    height: 50,
    width: 200,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    borderColor: "#23abab"
  }
});
