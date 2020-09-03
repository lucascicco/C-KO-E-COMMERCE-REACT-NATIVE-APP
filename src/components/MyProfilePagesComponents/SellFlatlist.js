import React from 'react';
import { FlatList } from 'react-native';
import FlatListItem from './SellItem';

import {
    FlatList_View
} from './styles';

export default function FlatlistProducts({data, onPress}) {
    return (
        <FlatList_View>
            <FlatList 
                data={data}
                keyExtractor={(item, index) => index}
                numColumns={1}
                renderItem={({ item }) => {
                    return(
                        <FlatListItem 
                            title={item.productName}
                            onPress={onPress}
                        />
                    )
                }}
            />
        </FlatList_View>
    )
}
