import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>
                { props.headerText }
            </Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#b3b3b3',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative'
    },

    textStyle: {
        fontSize: 20,
        color: '#ffffff'
    }
};

export { Header };