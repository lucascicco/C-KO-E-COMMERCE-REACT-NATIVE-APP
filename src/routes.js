import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

//FIRST SCREENS
import Login from './screens/LoginPage';
import SignUp from './screens/CreateAccountPage';

import PersonalInformation from './screens/PersonalFormPage';
import LocationPage from './screens/LocationFormPage';

//BOTTOM MENU NAVIGATION
import CreateProduct from './screens/CreateProductPage';
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

const 

export default () => 
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
                        CreateProduct,
                        HomePage: {
                            screen: createStackNavigator({
                                HomePage
                            })
                        },
                        MyProfile: {
                            screen: createStackNavigator({
                                MyProfile
                            })
                        }
                }),


            }, {
                initialRouteName: "Sign",
                headerMode: null,
                navigationOptions: {
                    headerVisible: false
                }
            }
    )
)