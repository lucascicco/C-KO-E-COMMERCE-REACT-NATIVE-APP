import React from 'react';

import {
    Container_one,
    Container_one_title
} from './styles';

export default function TitleView({ children }) {
    return (
        <Container_one>
            <Container_one_title>{children}</Container_one_title>
        </Container_one>
    )
};
