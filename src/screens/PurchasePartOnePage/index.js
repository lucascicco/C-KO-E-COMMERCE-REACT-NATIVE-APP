import React from 'react';

import {
    Container,
    TextTitle,
    NormalText,
    ProductImage,
    SliptView,
    FeaturesView,
    TotalText,
    SubmitButton
} from './styles';

function PurchaseTotalPage(){
    
    return(
        <Container>

            <SliptView>
                <ProductImage 
                    source={{ uri: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'}}
                />

                <FeaturesView>
                    <TextTitle>Nome do produto</TextTitle>
                    <NormalText>Preço: R$ 1.000,00</NormalText>
                    <NormalText>Quantidade: 3</NormalText>
                </FeaturesView>

            </SliptView>

            <SliptView>
                <NormalText>Total</NormalText>
                <TotalText>TotalValor</TotalText>
            </SliptView>

            
            <SliptView>
                <NormalText>Frete</NormalText>
                <TotalText>FreteValor</TotalText>
            </SliptView>

            <FeaturesView>
                <NormalText>Forma de pagamento</NormalText>
            </FeaturesView>
        </Container>
    )
}

export default PurchaseTotalPage