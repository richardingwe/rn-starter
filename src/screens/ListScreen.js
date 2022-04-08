import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const data = [
        { name: "friends-1" },
        { name: "friends-2" },
        { name: "friends-3" },
        { name: "friends-4" },
        { name: "friends-5" },
        { name: "friends-6" },
        { name: "friends-7" },
        { name: "friends-8" },
        { name: "friends-9" },
        { name: "friends-10" },
        { name: "friends-11" },
        { name: "friends-12" },
    ];
    return (
        <FlatList
            keyExtractor={data => data.name}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => (
                <Text
                    style={styles.textStyle}
                >{item.name.replace(/-/g, ' - ')}</Text>
            )}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        color: 'black',
        padding: 20,
        margin: 8,
        backgroundColor: 'lightblue',
        borderRadius: 5
    },
});

export default ListScreen;
