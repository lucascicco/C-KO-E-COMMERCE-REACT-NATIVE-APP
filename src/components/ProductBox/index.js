import React from 'react';
import { StyleSheet } from 'react-native';

import {
    Container,
    TitleFont,
    PriceFont,
    ProductImage,
    TextView
} from './styles'

function ProductBox({uri, productName, productPrice}){
    return(
        <Container style={styles.ShadowConfig}>
            <ProductImage
                source={{ uri: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'}}
            />
            <PriceFont>R$ {productPrice}</PriceFont>
            
            <TextView>
                <TitleFont>{productName}</TitleFont>
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

export default ProductBox;