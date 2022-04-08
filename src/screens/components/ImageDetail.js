import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const ImageDetail = ({ title, imageSource }) => {
    return (
        <View>
            <Image source={imageSource} />
            <Text>{title}</Text>
        </View>
    );
};

export default ImageDetail;

const styles = StyleSheet.create({});