import React, { useEffect } from 'react';
import { Animated, Keyboard, Platform, TouchableWithoutFeedback  } from 'react-native';
import { ImageResizingEventThree } from '../../utils/KeyboardsEvents';
import Background from '../../components/Background2';
import ProductForm from '../../components/ProductForm';

function CreateProductPage(){
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

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Background>
                <ProductForm 
                    ViewHeight={ViewHeight}
                    ViewWidth={ViewWidth}
                    FontSize={FontSize}
                    onClickSubmit={(valores) => console.log(valores)}
                />
            </Background>
        </TouchableWithoutFeedback>
    )
}


export default CreateProductPage