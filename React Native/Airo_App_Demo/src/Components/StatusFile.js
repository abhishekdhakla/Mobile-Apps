import React from 'react';
import { View, Text, Image } from 'react-native';

const StatusFile = ({ title, value, url }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContent}>
                <Text style={ styles.titleStyle }>{title}</Text>
                <Text style={ styles.valueStyle }>{value}</Text>
            </View>
            <View style={styles.imageContent}>
                <Image
                    style={ styles.imageStyle }
                    source={{uri: url}}
                />
            </View>
        </View>
    );
};

const styles = {
    imageStyle: {
        height: 70,
        width: 70,
    },
    titleStyle: {
        fontSize: 18,
        color: '#595959',
        padding: 10
    },
    valueStyle: {
        fontSize: 23,
        color: '#cc2900',
        padding: 10
    },
    textContent: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    container: {
        height: 100,
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#d9d9d9'
    },
    imageContent: {
        padding: 10,
    }
};

export default StatusFile;