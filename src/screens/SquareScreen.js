import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return (
        <View>
            <ColorCounter
                onIncrease={() => setRed(red + COLOR_INCREMENT)}
                onDecrease={() => setRed(red - COLOR_INCREMENT)}
                color="red"
            />
            <ColorCounter
                onIncrease={() => setGreen(green + COLOR_INCREMENT)}
                onDecrease={() => setGreen(green - COLOR_INCREMENT)}
                color="green"
            />
            <ColorCounter
                onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
                onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
                color="blue"
            />
            <View
                style={{
                    width: 150,
                    height: 150,
                    backgroundColor: `rgb(${red},${green},${blue})`
                }}
            />
        </View>
    );
};

export default SquareScreen;

const styles = StyleSheet.create({});