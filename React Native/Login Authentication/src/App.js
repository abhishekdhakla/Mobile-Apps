import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp(
            {
    apiKey: "AIzaSyC8T-r33Oe0ezLwAie6jMjqKmVDoY4D4-Q",
    authDomain: "authentication-7866e.firebaseapp.com",
    databaseURL: "https://authentication-7866e.firebaseio.com",
    projectId: "authentication-7866e",
    storageBucket: "authentication-7866e.appspot.com",
    messagingSenderId: "446328400372"
});

    firebase.auth().onAuthStateChanged((user) => {
        if(user){
            this.setState({ loggedIn: true });
        }
        else {
            this.setState({ loggedIn: false });
        }
    });
}

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                 return (
                     <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Sign Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size='large' />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authetication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;