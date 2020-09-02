import React from 'react';

import {
    container_one,
    container_one_title
} from './styles';

export default function FlatlistProducts({ children }) {
    return (
        <container_one>
            <container_one_title>
                {children}
            </container_one_title>
        </container_one>
    )
};
