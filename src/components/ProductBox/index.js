import React from 'react';

import {
    Container,
    TitleFont,
    PriceFont,
    ProductImage,
    TextView,
    TouchableOpacityView
} from './styles'

function ProductBox({uri, productName, productPrice}){
    return(
        <Container>
            <ProductImage
                source={{ uri: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'}}
            />

            <TextView>
                <TitleFont>{productName}</TitleFont>
                <PriceFont>{productPrice}</PriceFont>
            </TextView>
        </Container>
    )
}

export default ProductBox;