import React from 'react';
import { View, Text } from 'react-native';

const FieldHeader = (props) => {
    return(
        <View style={styles.viewStyle}>
            <View style={styles.textContent}>
                <Text style={styles.titleStyle}>
                    {props.title}
                </Text>
                <Text style={styles.statusStyle}>
                    {props.status}
                </Text>
            </View>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#008000',
        height: 47,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        position: 'relative',
        justifyContent: 'space-around',
        flex: 1
    },

    textContent: {
        flexDirection: 'row'
    },

    titleStyle: {
        fontSize: 15,
        paddingLeft: 20,
        color: '#ffffff',
        textAlign: 'left',
        flex: 1
    },

    statusStyle: {
        fontSize: 15,
        paddingRight: 20,
        color: '#ffffff',
        textAlign: 'right',
        flex: 1
    }
};

export { FieldHeader };