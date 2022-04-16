import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

const TextScreen = () => {
    const [name, setName] = useState('');
    return (
        <View>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(value) => setName(value)}
            />
            <Text>my name is {name}</Text>
        </View>
    );
};

export default TextScreen;

const styles = StyleSheet.create({
    input: {
        margin: 25,
        borderColor: 'black',
        borderWidth: 1,
        // height: 50,
        padding: 10
    }
});