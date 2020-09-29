/* eslint-disable react/prop-types */
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import InitialRoute from './utils/InitialRoute';

// FIRST SCREENS
import Login from './screens/FirstScreens/LoginPage';
import SignUp from './screens/FirstScreens/CreateAccountPage';

import PersonalInformation from './screens/FirstScreens/PersonalFormPage';
import LocationPage from './screens/FirstScreens/LocationFormPage';

// BOTTOM MENU NAVIGATION
import CreateProduct from './screens/CreateProductScreens/CreateProductPage';
import SendingInformations from './screens/CreateProductScreens/ProductSendingForm';
import HomePageProducts from './screens/ProductsScreens/HomePage';
import MyProfile from './screens/ProfilePages/AccountInfoPage';

// PROFILE SCREENS
import ChangeAccount from './screens/ProfilePages/ChangeAccountPage';
import ChangeLocation from './screens/ProfilePages/ChangeLocationPage';
import ChangePersonal from './screens/ProfilePages/ChangePersonalPage';

import MyProductsPage from './screens/ProfilePages/MyProductsPage';
import SellsById from './screens/ProfilePages/SellsByProduct';
import MySells from './screens/ProfilePages/MySellsPage';
import EditProductPage from './screens/ProfilePages/EditProductPage';
import StoppedPage from './screens/ProfilePages/StoppedPage';

import MyCart from './screens/ProfilePages/MyCart';
import PurchaseCart from './screens/ProfilePages/PurchaseCartPage';

import MyPurchases from './screens/ProfilePages/MyPurchasesPage';

// BUYING PAGES
import ProductPage from './screens/ProductsScreens/ProductPage';
import FretePage from './screens/ProductsScreens/FretePage';
import PurchasePartOne from './screens/ProductsScreens/PurchasePartOnePage';
import PurchasePartTwo from './screens/ProductsScreens/PurchasePage';

export default (isSigned, FirstAccess) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          Login,
          SignUp,
        }),
        FirstAccess: createStackNavigator(
          {
            PersonalInformation,
            LocationPage,
          },
          {
            headerMode: null,
          }
        ),
        App: createBottomTabNavigator(
          {
            HomePage: {
              screen: createStackNavigator(
                {
                  HomePageProducts,
                  ProductPage,
                  FretePage,
                  PurchasePartOne,
                  PurchasePartTwo,
                },
                {
                  navigationOptions: {
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ tintColor }) => (
                      <MaterialIcons name="store" size={20} color={tintColor} />
                    ),
                    headerBackTitle: 'Voltar',
                  },
                  defaultNavigationOptions: {
                    headerStyle: {
                      backgroundColor: '#5e35b1',
                    },
                    headerTintColor: 'white',
                  },
                }
              ),
            },
            CreateProduct: {
              screen: createStackNavigator(
                {
                  CreateProduct,
                  SendingInformations,
                },
                {
                  navigationOptions: {
                    tabBarLabel: 'Criar produto',
                    tabBarIcon: ({ tintColor }) => (
                      <MaterialIcons name="add" size={25} color={tintColor} />
                    ),
                    headerBackTitle: 'Voltar',
                  },
                  defaultNavigationOptions: {
                    headerStyle: {
                      backgroundColor: '#5c6bc0',
                    },
                    headerTintColor: 'white',
                  },
                }
              ),
            },
            MyProfile: {
              screen: createStackNavigator(
                {
                  MyProfile,
                  ChangeAccount,
                  ChangeLocation,
                  ChangePersonal,
                  MyProductsPage,
                  SellsById,
                  EditProductPage,
                  StoppedPage,
                  MySells,
                  MyCart,
                  PurchaseCart,
                  MyPurchases,
                },
                {
                  initialRouteName: 'MyProfile',
                  navigationOptions: {
                    tabBarLabel: 'Meu perfil',
                    tabBarIcon: ({ tintColor }) => (
                      <MaterialIcons
                        name="account-circle"
                        size={25}
                        color={tintColor}
                      />
                    ),
                  },
                  defaultNavigationOptions: {
                    headerStyle: {
                      backgroundColor: '#5c6bc0',
                    },
                    headerTintColor: 'white',
                  },
                }
              ),
            },
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255,255,255,0.6)',
              style: {
                backgroundColor: '#5c6bc0',
              },
            },
          }
        ),
      },
      {
        initialRouteName: InitialRoute(isSigned, FirstAccess),
        headerMode: null,
        navigationOptions: {
          headerVisible: false,
        },
      }
    )
  );
