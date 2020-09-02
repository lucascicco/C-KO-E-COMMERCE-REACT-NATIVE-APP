import React from 'react';

import {
    FlatList_Item,
    Flatlist_ViewTwo,
    FlatList_Text,
    FlatList_Title,
    Product_Image
} from './styles';

export default function Flatlist_item({title}) {
    return (
        <FlatList_Item>
            <Product_Image 
                source={{ uri: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'}}
            />
            <Flatlist_ViewTwo>
                <FlatList_Title>{title}</FlatList_Title>
            </Flatlist_ViewTwo>
        </FlatList_Item>
    );
}
