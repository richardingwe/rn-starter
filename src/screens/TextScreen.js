import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

const TextScreen = () => {
    return (
        <View>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>
    );
};

export default TextScreen;

const styles = StyleSheet.create({
    input: {
        margin: 25,
        borderColor: 'black',
        borderWidth: 1,
        height: 50
    }
});