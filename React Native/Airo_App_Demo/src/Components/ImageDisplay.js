import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageDisplay = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ paddingTop: 10 }}>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/01/29/11/Taylor-Swift-revenge-nerds.jpg' }} />
            </View>
            <View style={{ paddingTop: 20, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Image
                    style={{ height: 300 }}
                    source={{ uri: 'http://media.caranddriver.com/images/media/51/2017-10best-lead-photo-672628-s-original.jpg' }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 1, paddingLeft: 10 }}>
                        <Image
                        style={{ height: 145 }}
                        source={{ uri: 'https://www.seabourn.com/images/miscellaneous/Seabourn_Encore_v2_170112.jpg' }} />
                    </View>
                    <View style={{ flex: 1, paddingLeft: 10 }}>
                        <Image
                        style={{ height: 145 }}
                        source={{ uri: 'http://www.goh2otours.com/wp-content/uploads/2016/05/h2O-tours-cruise.jpg' }} />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = {
    imageStyle: {
        height: 200,
        width: null,
    }
};

export default ImageDisplay;