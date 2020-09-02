import React from 'react';
import { FlatList } from 'react-native';
import FlatListItem from './FlatListItem';

import {
    FlatList_View
} from './styles';

export default function FlatlistProducts({data}) {
    return (
        <FlatList_View>
            <FlatList 
                data={data}
                keyExtractor={item => item.id}
                numColumns={1}
                renderItem={({ item }) => {
                    return(
                        <FlatListItem 
                            title={item.name}
                        />
                    )
                }}
            />
        </FlatList_View>
    )
}
