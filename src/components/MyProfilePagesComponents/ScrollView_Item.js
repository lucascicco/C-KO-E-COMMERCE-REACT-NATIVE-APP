import React from 'react';

import {
    ScrollViewItem,
    ViewItem,
    ScrollView_Text
} from './styles';

export default function ScrollView_Item({Children, onPress}) {
    return (
        <ScrollViewItem onPress={onPress}>
            <ViewItem>
                <ScrollView_Text>
                    {Children}
                </ScrollView_Text>
            </ViewItem>
        </ScrollViewItem>
    );
}
