import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialIcons } from '@expo/vector-icons'; 
import InitialRoute from './utils/InitialRoute';

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
import FretePage from './screens/FretePage';
import PurchasePartOne from './screens/PurchasePartOnePage';
import PurchasePartTwo from './screens/PurchasePage';

import { createStackNavigator } from 'react-navigation-stack';

export default (isSigned, FirstAccess) => 
    createAppContainer(
        createSwitchNavigator(
            {
                Sign: createSwitchNavigator({
                        Login,
                        SignUp
                }),
                FirstAccess: createStackNavigator({
                        PersonalInformation,
                        LocationPage
                }, {
                    headerMode: null
                }),
                App: createBottomTabNavigator({
                        HomePage: {
                            screen: createStackNavigator({
                                HomePage,
                                ProductPage,
                                FretePage,
                                PurchasePartOne,
                                PurchasePartTwo
                            }, {
                                navigationOptions: {
                                    tabBarLabel: 'Início',
                                    tabBarIcon: ({ tintColor }) =>  (
                                        <MaterialIcons name="store" size={20} color={tintColor} />
                                    ),
                                    headerBackTitle: 'Voltar'
                                },
                                defaultNavigationOptions: {
                                    headerStyle: {
                                        backgroundColor: '#5e35b1',
                                    },
                                    headerTintColor: 'white'
                                }
                            })
                        },
                        CreateProduct: {
                            screen: createStackNavigator({
                                CreateProduct,
                                SendingInformations
                            }, {
                                navigationOptions: {
                                    tabBarLabel: 'Criar produto',
                                    tabBarIcon: ({ tintColor }) =>  (
                                        <MaterialIcons name="add" size={25} color={tintColor} />
                                    ),
                                    headerBackTitle: 'Voltar'
                                },
                                defaultNavigationOptions: {
                                    headerStyle: {
                                        backgroundColor: '#5c6bc0',
                                    },
                                    headerTintColor: 'white'
                                }
                            })
                        },
                        MyProfile: {
                            screen: createStackNavigator({
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
                                initialRouteName: 'MyProfile',
                                navigationOptions: {
                                    tabBarLabel: 'Meu perfil',
                                    tabBarIcon: ({ tintColor }) =>  (
                                        <MaterialIcons name="account-circle" size={25} color={tintColor} />
                                    )
                                },
                                defaultNavigationOptions: {
                                    headerStyle: {
                                        backgroundColor: '#5c6bc0',
                                    },
                                    headerTintColor: 'white'
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
                initialRouteName: InitialRoute(isSigned, FirstAccess),
                headerMode: null,
                navigationOptions: {
                    headerVisible: false
                }
            }
    )
)