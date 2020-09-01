import React from 'react';
import { FlatList } from 'react-native';
import ProductBox from '../ProductBox';

import {
    Container
} from './styles'

function ItemsBox({data}){
    return(
        <Container>
            <FlatList
                showsHorizontalScrollIndicator={true}
                data={data}
                keyExtractor={item => item.productName}
                numColumns={2}
                renderItem={({ item }) => {
                    return(
                        <ProductBox 
                            productName={item.productName}
                            productPrice={item.price}
                        />
                    )
                }}
            />
        </Container>
    )
}

export default ItemsBox;