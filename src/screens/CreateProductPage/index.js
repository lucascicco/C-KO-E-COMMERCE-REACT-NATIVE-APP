import React, { useEffect } from 'react';
import { Animated, Keyboard, Platform, TouchableWithoutFeedback, Alert, StatusBar } from 'react-native';
import { ImageResizingEventThree } from '../../utils/KeyboardsEvents';
import Background from '../../components/Background2';
import ProductForm from '../../components/ProductForm';
import api from '../../services/api';


export default function CreateProductPage({ navigation }){
    const typeOfPlatform = Platform.OS === 'ios'

    const ViewHeight = new Animated.Value(175);
    const ViewWidth = new Animated.Value(175);
    const FontSize = new Animated.Value(22);
    
    useEffect(() => {
        const typeOfShow = typeOfPlatform ?  'keyboardWillShow' : 'keyboardDidShow'
        const typeOfHide = typeOfPlatform ? 'keyboardWillHide' : 'keyboardDidHide'

            Keyboard.addListener(typeOfShow, ImageResizingEventThree('show', ViewHeight, ViewWidth, FontSize));
            Keyboard.addListener(typeOfHide, ImageResizingEventThree('hide', ViewHeight, ViewWidth, FontSize));

            return () => {
                 Keyboard.removeListener(typeOfShow, ImageResizingEventThree('show', ViewHeight, ViewWidth, FontSize));
                 Keyboard.removeListener(typeOfHide, ImageResizingEventThree('hide', ViewHeight, ViewWidth, FontSize));
            }
    }, [])

    function isEmpty (obj) {
        return Object.values(obj).some(element => element === '');
    }
    
    const handleSubmit = (product) => {
        if(isEmpty(product)){
            return Alert.alert(
                'Preencha os campos',
                'Antes de passar para a próxima página, preencha todos os campos adequadamente.'
            )
        }
        
        navigation.navigate('SendingInformations', {
           product: product
        })
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Background>
                <ProductForm 
                    ViewHeight={ViewHeight}
                    ViewWidth={ViewWidth}
                    FontSize={FontSize}
                    onClickSubmit={handleSubmit}
                />
            </Background>
        </TouchableWithoutFeedback>
    )
}

CreateProductPage.navigationOptions = ({ navigation }) => ({
    headerShown: false,
});