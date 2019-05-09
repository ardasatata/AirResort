import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import {
    StackNavigator,
    createStackNavigator,
    createAppContainer,
    withNavigation,
    TabNavigator
} from 'react-navigation';

import loginView from './views/login'
import registerView from './views/register'
import listKamarView from './views/listKamar'
import detailKamarView from './views/detailKamar'

const RootStack = createStackNavigator({
    Login: {
        screen: loginView,
        navigationOptions: ({navigation}) => ({
            header: null,
            tabBarVisible: false,
            gesturesEnabled: true
        }),
    },
    Register: {
        screen: registerView,
        navigationOptions: ({navigation}) => ({
            header: null,
            tabBarVisible: false,
            gesturesEnabled: true
        }),
    },
    listKamar: {
        screen: listKamarView,
        navigationOptions: ({navigation}) => ({
            gesturesEnabled: true,
            title: 'AirResort',
            headerLeft: null
        }),
    },
    detailKamar: {
        screen: detailKamarView,
        navigationOptions: ({navigation}) => ({
            gesturesEnabled: true
        }),
    },
});


const createRootNavigator = () => {
    return createStackNavigator(
        {
            Login : {
                screen: loginView,
                navigationOptions:{
                }
            }
        }
    )
}

const Root = createAppContainer(RootStack);

export default Root;