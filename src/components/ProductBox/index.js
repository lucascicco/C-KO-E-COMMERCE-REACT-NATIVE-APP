import React from 'react';

import {
    Container,
    TitleFont,
    PriceFont,
    ProductImage,
    TextView
} from './styles'

function ProductBox({uri, productName, productPrice}){
    return(
        <Container>
            <ProductImage source={{ uri:  'https://images.wunderstock.com/Green-Grasses-Near-Water-at-Sunset_GA4wfdpcMdH1_800.jpeg'}}/>

            <TextView>
                <TitleFont>{productName}</TitleFont>
                <PriceFont>{productName}</PriceFont>
            </TextView>
        </Container>
    )
}

export default ProductBox;