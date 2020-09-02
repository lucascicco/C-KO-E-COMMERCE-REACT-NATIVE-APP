import React, {useState, useEffect} from 'react';
import TitleView from '../../components/MyProfilePagesComponents/TitleView';
import ScrollViewX from '../../components/MyProfilePagesComponents/ScrollViewOptions';
import AvatarView from '../../components/MyProfilePagesComponents/AvatarView';
import Background from '../../components/Background4'

import {
    Container
} from './styles';

function MyProductsPage(){
    return (
       <Background>
        <Container>
            <TitleView>
                Meu perfil
            </TitleView>
            <AvatarView />
            <ScrollViewX/>
         </Container>
       </Background>
    )
}

export default MyProductsPage;