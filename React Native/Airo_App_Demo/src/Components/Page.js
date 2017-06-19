import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, CardSection, FieldHeader, List } from './Common';
import TextDisplay from './TextDisplay';
import StatusFile from './StatusFile';
import ImageDisplay from './ImageDisplay';

const Page = () => {
    return (
        <ScrollView>
        <Card>
            <CardSection>
                <View>
                    <TextDisplay name="Maryam" message="Have a light snack before 3PM" />
                </View>
            </CardSection>     
            <CardSection>
                <FieldHeader title="Progress" status="On Track" />
            </CardSection>
            <CardSection>
                <View style={{ flex: 1, height: 100, flexDirection: 'row' }}>
                    <StatusFile title="Calories" value="1430"  url="https://cdn4.iconfinder.com/data/icons/emojis-set-2/60/Emojis_Second_-_Flat_-_050_-_Baby_Girl-128.png" />
                    <StatusFile title="Active" value="Low"  url="https://cdn0.iconfinder.com/data/icons/negative-character-traits-alphabet-h-part-2/215/negative-h002-128.png" />
                </View>
            </CardSection>
            <CardSection>
                <View style={{ flex: 1, height: 100, flexDirection: 'row' }}>
                    <StatusFile title="Pulse" value="70bmp"  url="https://cdn3.iconfinder.com/data/icons/tiny-little-medical-1/512/health-hearth-ekg-pulse-256.png" />
                    <StatusFile title="Stress" value="High"  url="https://cdn3.iconfinder.com/data/icons/abstract-1/512/Stress-256.png" />
                </View>
            </CardSection>
            <CardSection>
                <FieldHeader title="Goals" status="3/5" />
            </CardSection>
            <CardSection>
                <View style={{ height: 200, flex: 1 }}>
                    <List items="Wake up" />
                    <List items="Go to Bed" />
                    <List items="Again Wake up" />
                    <List items="Sleep again" />
                </View>
            </CardSection>
            <CardSection>
                <FieldHeader title="Images" status="Your Life" />
            </CardSection>
            <CardSection>
                <ImageDisplay />
            </CardSection>
        </Card>
        </ScrollView>
    );
};


export default Page;