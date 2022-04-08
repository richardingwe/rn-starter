import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello world</Text>
      <Button
        title="Go to Components demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to List demo"
        onPress={() => navigation.navigate('List')}>
      </Button>
      <Button
        title="Go to Image demo"
        onPress={() => navigation.navigate('Image')}>
      </Button>
      <Button
        title="Go to Counter demo"
        onPress={() => navigation.navigate('Counter')}>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'black',
    // backgroundColor: 'lightblue',
    textAlign: 'center',
    paddingVertical: 16
  },
});

export default HomeScreen;
