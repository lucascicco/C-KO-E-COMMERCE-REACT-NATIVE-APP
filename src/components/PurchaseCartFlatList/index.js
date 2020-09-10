import React from 'react';
import { FlatList } from 'react-native';
import FlatListItem from './item_flatlist';

import {
    Purchase_Flatlist
} from './styles';

export default function MyCartFlatList({data , onPress}) {
    return (
        <Purchase_Flatlist>
            <FlatList 
                data={data}
                keyExtractor={(item, index) => index}
                horizontal={true}
                renderItem={({ item }) => {
                    return(
                        <FlatListItem 
                            title={item.productName}
                            onPress={onPress}
                        />
                    )
                }}
            />
        </Purchase_Flatlist>
    )
}
