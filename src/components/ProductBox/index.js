import React from 'react';
import { StyleSheet } from 'react-native';

import {
    Container,
    TitleFont,
    PriceFont,
    ProductImage,
    TextView
} from './styles'

export default function ProductBox({ item, navigation }){
    const { id, product_image , product_name, price} = item

    return(
        <Container style={styles.ShadowConfig} onPress={() => navigation.navigate('ProductPage', {
            product_id: id,
            product_image: product_image.url,
            product_name: product_name
        })}>
            <ProductImage
                source={{ uri: product_image.url}}
            />
            <PriceFont>R$ {price}</PriceFont>
            
            <TextView>
                <TitleFont> {product_name} </TitleFont>
            </TextView>
        </Container>
    )
}

const styles = StyleSheet.create({
    ShadowConfig: {
        shadowColor: "black",
        shadowOffset: {
        	width: 2,
        	height: 8,
        },
        shadowOpacity: 0.65,
        shadowRadius: 2.00,
        elevation: 12
    }
})
