import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {firebaseConfig} from "./config/firebase";
import Root from "./router";
import * as firebase from 'firebase';

export default class App extends Component{
    render() {
        return (
            <Root />
        );
    }
}

firebase.initializeApp(firebaseConfig);






