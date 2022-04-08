import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function CounterScreen() {
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <Button title="Increase" onPress={() => setCounter(counter => counter + 1)} />
            <Button title="Decrease" onPress={() => setCounter(counter => counter - 1)} />
            <Text style={styles.text}>{counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        marginTop: 100,
        fontSize: 28
    }
});