import React from 'react';

import {
    Avatar_View,
    AvatarImage
} from './styles';

export default function AvatarView({ uri }) {
    return (
        <Avatar_View>
            <AvatarImage 
            source={{ uri: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'}}
            />
        </Avatar_View>
    );
}
