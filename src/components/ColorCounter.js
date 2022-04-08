import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ColorCounter = ({ color, onDecrease, onIncrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button
                onPress={() => onIncrease()}
                title={`Increase ${color}`} />
            <Button
                onPress={() => onDecrease()}
                title={`Decrease ${color}`} />
        </View>
    );
};

export default ColorCounter;

const styles = StyleSheet.create({});