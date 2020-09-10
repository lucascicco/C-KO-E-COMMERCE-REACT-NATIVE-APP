import React, { useEffect } from 'react';
import { Animated, Keyboard, Platform, TouchableWithoutFeedback  } from 'react-native';
import { ImageResizingEventThree } from '../../utils/KeyboardsEvents';
import Background from '../../components/Background2';
import ProductForm from '../../components/ProductForm';
import {
    SubmitBottom
} from './styles';

function EditProductPage(){
    //PEGAR DADOS DO REDUCER E PASSAR COMO PROPS SEPARADAMENTE PARA O 
    // PRODUCT FORM,  E NO PRODUCT FORM, FAZER A LÓGICA DENTRO DOS USESTATES
    // EXEMPLO: PRODUCTNAME? PRODUCTNAME : '. -> POIS TEM QUE DEIXAR PRE-PREENCHIDO O FORM QUANDO SE VAI EDITAR.
    
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
                
                <SubmitBottom style={{ background: '#d32f2f'}} onPress={() => console.log('red button was pressed.')}>
                    Pausar anúncio
                </SubmitBottom>
            </Background>
        </TouchableWithoutFeedback>
    )
}


export default EditProductPage