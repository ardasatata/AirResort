import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView, RefreshControl, Image,ImageBackground
} from 'react-native';

import { Input,Button } from 'react-native-elements';
import * as firebase from "firebase";

export default class login extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { firebase: '' };
    }

    login(email,password){

        firebase.auth().signInWithEmailAndPassword(email, password).then(
            this.props.navigation.navigate('listKamar',{
            })
        ).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
                <ImageBackground source={require('../../app/assets/bg.png')} style={{width: '100%', height: '100%'}}>
                    <View style={styles.container}>
                        <Input
                            labelStyle={{color:'white'}}
                            style = {styles.button}
                            placeholder='Email'
                            containerStyle={[{ padding:8 }]}
                            onChangeText={(email) => this.setState({email})}
                        />
                        <Input
                            labelStyle={{color:'white'}}
                            style = {styles.button}
                            placeholder='Password'
                            containerStyle={[{ padding:8 }]}
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({password})}
                        />
                        <Button
                            style = {styles.button}
                            title="Login"
                            onPress={() => this.login(this.state.email,this.state.password)}
                            containerStyle={[{ padding:8 }]}
                        />
                    </View>
                    <Button
                        titleStyle={{color:'white'}}
                        style = {{padding:8}}
                        title="Register here"
                        type="clear"
                        onPress={() => navigate('Register',{})}
                        backgroundColor={'red'}
                    />
                </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding :8
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10,
    },
    button:{
        padding: 8,
        margin: 2,
        fontSize: 18
    },
    loginForm: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
});