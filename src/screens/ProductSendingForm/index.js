import React, { useEffect } from 'react';
import { Animated, Keyboard, Platform, StyleSheet, Alert } from 'react-native';
import { ImageResizingEventTwo } from '../../utils/KeyboardsEvents';
import Background from '../../components/Background2';
import ProductComponent from '../../components/ProductFeatures';
import api from '../../services/api';
import validationDate from '../../utils/CorreiosValidation'

import { 
    Container
} from './styles';

export default function ProductSendingForm({ navigation }){
    const typeOfPlatform = Platform.OS === 'ios'

    const product = navigation.getParam('product');

    const IconSize = new Animated.Value(50) 
    const ViewSize = new Animated.Value(100)
    const TextSize = new Animated.Value(35)

    useEffect(() => {
        const typeOfShow = typeOfPlatform ?  'keyboardWillShow' : 'keyboardDidShow'
        const typeOfHide = typeOfPlatform ? 'keyboardWillHide' : 'keyboardDidHide'

            Keyboard.addListener(typeOfShow, ImageResizingEventTwo('show', IconSize, ViewSize, TextSize));
            Keyboard.addListener(typeOfHide, ImageResizingEventTwo('hide', IconSize, ViewSize, TextSize));

            return () => {
                 Keyboard.removeListener(typeOfShow, ImageResizingEventTwo('show', IconSize, ViewSize, TextSize));
                 Keyboard.removeListener(typeOfHide, ImageResizingEventTwo('hide', IconSize, ViewSize, TextSize));
            }
    }, [])
    
    const handleSubmit = async ({ format, width, height, length, weight, diameter }) => {
        try{
            if(!validationDate(format, width, height, length, weight, diameter)){
                return Alert.alert(
                    'Erro na validação',
                    'Respeite os limites das dimensões proposto. Dê uma olhada na tablea novamente.'
                )
            }

            const bodyFormData = new FormData()

            bodyFormData.append('file', product.image_id)
            bodyFormData.append('product_name', product.product_name)
            bodyFormData.append('category', product.category)
            bodyFormData.append('quantity', product.quantity)
            bodyFormData.append('description', product.description)
            bodyFormData.append('price', product.price)

            const response_one = await api.post('product', bodyFormData , 
            {
                headers: {'Content-Type': 'multipart/form-data' }
            })

            const response = await api.post('features', {
                product:  response_one.data.product.id,
                format,
                width,
                height,
                length,
                weight,
                diameter
            })   

            console.log(response.data)
        }catch(e){
            Alert.alert
            (
                'Erro ao salvar',
                'Verique se os campos foram preenchidos corretamente'
            )
        }
    }

    return(
        <Background>
            <Container>
               <Animated.View 
                   style={[styles.TitleView, { height: ViewSize }]}
               >
                   <Animated.Text 
                       style={[styles.TextTitle, { fontSize: TextSize }]}
                   >
                       Dados para envio
                   </Animated.Text>
               </Animated.View>

                <ProductComponent onClickSubmit={handleSubmit} />
            </Container>
        </Background>
    )
}


const styles = StyleSheet.create({
    TitleView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextTitle: {
        fontWeight: 'bold',
        marginRight: 15,
        fontFamily: 'playfair-bold'
    },
    IconView: {
        width: 100,
        marginLeft: 0
    }
}) 
