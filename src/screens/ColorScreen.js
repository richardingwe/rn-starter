import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import React, { useState } from 'react';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    return (
        <View>
            <Button title="Add a Color" onPress={() => {
                setColors(colors => [randomRgb(), ...colors]);
            }} />
            <FlatList
                keyExtractor={colors => colors}
                showsVerticalScrollIndicator={false}
                data={colors}
                renderItem={({ item }) => (
                    <View style={{ height: 100, width: '100%', backgroundColor: item }} />
                )}
            />
        </View>
    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

export default ColorScreen;

const styles = StyleSheet.create({});