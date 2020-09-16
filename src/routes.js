import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialIcons } from '@expo/vector-icons'; 

//FIRST SCREENS
import Login from './screens/LoginPage';
import SignUp from './screens/CreateAccountPage';

import PersonalInformation from './screens/PersonalFormPage';
import LocationPage from './screens/LocationFormPage';

//BOTTOM MENU NAVIGATION
import CreateProduct from './screens/CreateProductPage';
import SendingInformations from './screens/ProductSendingForm';
import HomePage from './screens/HomePage';
import MyProfile from './screens/AccountInfoPage';

//PROFILE SCREENS
import ChangeAccount from './screens/ChangeAccountPage';
import ChangeLocation from './screens/ChangeLocationPage';
import ChangePersonal from './screens/ChangePersonalPage';

import MyProductsPage from './screens/MyProductsPage';
import MySells from './screens/MySellsPage';

import MyCart from './screens/MyCart';
import PurchaseCart from './screens/PurchaseCartPage';

import MyPurchases from './screens/MyPurchasesPage';
import PurchaseMultiple from './screens/MultiplePurchasePage';

//BUYING PAGES
import ProductPage from './screens/ProductPage';
import PurchasePartOne from './screens/PurchasePartOnePage';
import PurchasePartTwo from './screens/PurchasePage';


import { createStackNavigator } from 'react-navigation-stack';


export default (isSigned = false) => 
    createAppContainer(
        createSwitchNavigator(
            {
                Sign: createSwitchNavigator({
                        Login,
                        SignUp
                }),
                FirstAcess: createStackNavigator({
                        PersonalInformation,
                        LocationPage
                }),
                App: createBottomTabNavigator({
                        HomePage: {
                            screen: createStackNavigator({
                                HomePage,
                                ProductPage,
                                PurchasePartOne,
                                PurchasePartTwo
                            }, {
                                navigationOptions: {
                                    tabBarLabel: 'Início',
                                    tabBarIcon: ({ tintColor }) =>  (
                                        <MaterialIcons name="store" size={20} color={tintColor} />
                                    )  
                                }
                            })
                        },
                        CreateProduct: {
                            screen: createStackNavigator({
                                CreateProduct,
                                SendingInformations
                            }, {
                                headerMode: null,
                                navigationOptions: {
                                    tabBarLabel: 'Criar produto',
                                    tabBarIcon: ({ tintColor }) =>  (
                                        <MaterialIcons name="add" size={25} color={tintColor} />
                                    )  
                                }
                            })
                        },
                        MyProfile: {
                            screen: createSwitchNavigator({
                                MyProfile,
                                ChangeAccount,
                                ChangeLocation,
                                ChangePersonal,
                                MyProductsPage,
                                MySells,
                                MyCart,
                                PurchaseCart,
                                MyPurchases,
                                PurchaseMultiple
                            },{
                                navigationOptions: {
                                    tabBarLabel: 'Meu perfil',
                                    tabBarIcon: ({ tintColor }) =>  (
                                        <MaterialIcons name="account-circle" size={25} color={tintColor} />
                                    )  
                                }
                            })
                        }
                }, {
                    resetOnBlur: true,
                    tabBarOptions: {
                        keyboardHidesTabBar: true,
                        activeTintColor: '#FFF',
                        inactiveTintColor: 'rgba(255,255,255,0.6)',
                        style: {
                            backgroundColor: '#5c6bc0'
                        }
                    }
                })
            }, 
            {
                initialRouteName: isSigned ? 'App' :  'Sign',
                headerMode: null,
                navigationOptions: {
                    headerVisible: false
                }
            }
    )
)