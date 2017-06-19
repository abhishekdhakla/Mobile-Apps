import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './Components/Common';
import Page from './Components/Page';


class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText="Home" />
                <Page />
            </View>
        );
    }
}

export default App;