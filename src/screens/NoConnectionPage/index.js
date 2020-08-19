import React from 'react';
import { StatusBar, Platform , Image} from 'react-native'
import LoadingDots from "react-native-loading-dots";

import { 
    Container,
    TextTitle,
    CustomView,
    LoadingView,
    ImageView,
    WarningText
} from './styles'

function NoConnectionPage() {
    const barStyle = Platform.OS === 'ios' ? 'dark-content' : 'light-content'
   
    return(
        <Container>
            <ImageView>

                <Image
                    source={require('../../assets/Cko_logo.png')}
                    style={{ height: 100, width: 100}}
                    resizeMode="cover"
                />

                <WarningText>
                    Alerta
                </WarningText>

            </ImageView>

            <StatusBar 
                barStyle={barStyle}
                hidden={false}
                backgroundColor="#303f9f"
            />
            
            <CustomView>
                <TextTitle>Usuário sem conexão</TextTitle>
            </CustomView>
            
            <LoadingView>
                <LoadingDots
                    dots={3}
                    size={20}
                    colors={['#000000', '#000000', '#000000']}
                />
            </LoadingView>

        </Container>
    )
}

export default NoConnectionPage