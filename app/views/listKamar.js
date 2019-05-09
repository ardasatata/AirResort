import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView, RefreshControl,FlatList,Image,TouchableOpacity
} from 'react-native';


import { Input,Button } from 'react-native-elements';

let notif = [
    {
        typeKamar: 'Single',
        keterangan: 'A room assigned to one person. May have one or more beds.',
        harga:'350000',
        uriGambar: 'https://setupmyhotel.com/images/Room-Type-Single-Room.jpg',
    },
    {
        typeKamar: 'Double',
        keterangan: 'A room assigned to two people. May have one or more beds.',
        harga:'600000',
        uriGambar: "https://setupmyhotel.com/images/Room-Type-Double-Room.jpg",
    },
    {
        typeKamar: 'Suite',
        keterangan: 'A parlour or living room connected with to one or more bedrooms. (A room with one or more bedrooms and a separate living space',
        harga:'1200000',
        uriGambar: "https://setupmyhotel.com/images/Room-Type-suite-Room.jpg",
    },
    {
        typeKamar: 'Cabana',
        keterangan: 'This type of room is always adjoining to the swimming pool or have a private pool attached to the room.',
        harga:'1800000',
        uriGambar: "https://setupmyhotel.com/images/Room-Type-Cabana-Room.jpg",
    },
    {
        typeKamar: 'Villa',
        keterangan: 'A special form of accommodation which can be found in some resort hotels. It is a kind of stand-alone house which gives extra privacy and space to hotel guests. A fully equipped villa contains not only bedrooms and a living room but a private swimming pool, Jacuzzi and balcony. It is suitable for couples, families and large groups.',
        harga:'2500000',
        uriGambar: "https://setupmyhotel.com/images/Room-Type-Villas.jpg",
    }
]

export default class listKamar extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { firebase: '' };
    }

    renderItem = ({ item }) => (
        <View style={{padding:8}}>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('detailKamar',{
                    typeKamar: item.typeKamar,
                    keterangan: item.keterangan,
                    harga: item.harga,
                    gambar : item.uriGambar
                })}
                style={{alignItems:'center',padding:8,backgroundColor: '#0c64b3'}}
            >
            <Image style={{width: 128, height: 128}}
                   source={{ uri: item.uriGambar }}
            />
                <View style={{flex:2,padding:4,flexDirection: 'column'}}>
                    <Text style={{fontSize:18,fontWeight: 'bold',color: 'white'}}>{item.typeKamar} </Text>
                    <Text numberOfLines={1} style={{fontSize:18,fontWeight: '',color: 'white'}}>{item.keterangan}</Text>
                    <Text style={{fontSize:18,fontWeight: '',color: 'white'}}>IDR {item.harga}</Text>
                </View>

            </TouchableOpacity>
        </View>
    );

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={notif}
                    renderItem={this.renderItem}
                    style={{flex:1}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    infoContainer: {
        padding: 8,
        flexDirection: 'row',
        backgroundColor: '#ffe9b9'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#0c82d3',
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