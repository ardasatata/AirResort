import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView, RefreshControl, Image, TouchableOpacity
} from 'react-native';

import { Input,Button } from 'react-native-elements';

export default class register extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            typeKamar: this.props.navigation.state.params.typeKamar, //passing UID dan Token
            keterangan : this.props.navigation.state.params.keterangan,
            harga : this.props.navigation.state.params.harga,
            gambar : this.props.navigation.state.params.gambar,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={{width: 256, height: 256}}
                       source={{ uri: this.state.gambar }}
                />
                <View style={{flex:2,padding:4,flexDirection: 'column'}}>
                    <Text style={{fontSize:18,fontWeight: 'bold',color: 'white'}}>{this.state.typeKamar} </Text>
                    <Text style={{fontSize:18,fontWeight: '',color: 'white'}}>{this.state.keterangan}</Text>
                    <Text style={{fontSize:18,fontWeight: '',color: 'white'}}>IDR {this.state.harga}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0c80d1',
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