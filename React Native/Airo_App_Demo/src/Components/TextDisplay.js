import React from 'react';
import { View, Text } from 'react-native';

const TextDisplay = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>
                Welcome Back, { props.name }!
            </Text>
            <Text style={styles.textStyle}>
                { props.message }
            </Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40,
        paddingBottom: 15
    },

    textStyle: {
        fontSize: 15,
        padding: 5,
        color: '#404040',
    }
};

export default TextDisplay;