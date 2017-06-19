import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style = {styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        backgroundColor: '#f2f2f2',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    }
};

export {Card};