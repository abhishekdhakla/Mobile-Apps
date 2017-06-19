import React from 'react';
import { View, Text } from 'react-native';

const List = ({ items }) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>
                { items }
            </Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        height: 45,
        backgroundColor: '#e6e6e6',
        flex: 1,
        borderWidth: 2,
        borderColor: '#d9d9d9'
    },
    textStyle: {
        fontSize: 20,
        padding: 10,
        justifyContent: 'space-around',
        flex: 1,
    }
};

export { List };