import React from 'react';
import { FlatList } from 'react-native';
import ProductBox from '../ProductBox';

import {
    Container
} from './styles'

function ItemsBox({data, navigation}){
    return(
        <Container>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item }) => {
                    return(
                        <ProductBox 
                            item={item}
                            navigation={navigation}
                        />
                    )
                }}
            />
        </Container>
    )
}

export default ItemsBox;