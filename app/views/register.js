import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView, RefreshControl, ImageBackground,Alert
} from 'react-native';

import { Input,Button } from 'react-native-elements';
import * as firebase from "firebase";

export default class register extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { firebase: '' };
    }

    register(email,password){
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        }).then(Alert.alert(
            'Alert',
            'Register Succeed',
            [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
        ));
    }

    render() {
        return (

            <View style={styles.container}>
                <ImageBackground source={require('../../app/assets/bg.png')} style={{width: '100%', height: '100%'}}>
                    <View style={styles.container}>
                        <Input
                            containerStyle={[{ padding:8 }]}
                            placeholder='Email'
                            onChangeText={(email) => this.setState({email})}
                        />
                        <Input
                            containerStyle={[{ padding:8 }]}
                            placeholder='Password'
                            onChangeText={(password) => this.setState({password})}
                            secureTextEntry={true}
                        />
                        <Input
                            containerStyle={[{ padding:8 }]}
                            placeholder='Confirm Password'
                            secureTextEntry={true}
                        />
                        <Button
                            containerStyle={[{ padding:8 }]}
                            title="Register"
                            onPress={() => this.register(this.state.email,this.state.password)}
                        />
                    </View>
                    <Button
                        titleStyle={{color:'white'}}
                        style = {{padding:8}}
                        title="Already registered? Login here"
                        type="clear"
                        onPress={() => this.props.navigation.navigate('Login',{})}
                        backgroundColor={'red'}
                    />
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    }
});