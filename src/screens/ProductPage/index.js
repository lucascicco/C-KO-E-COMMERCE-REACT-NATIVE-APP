import React from 'react';

import { 
    Container,
    ProductView,
    ProductTitle,
    DetailsText,
    TotalText,
    TotalBasic,
    Details,
    PriceText,
    ProductImage,
    FeaturesView,
    SubmitButton,
    RowView,
    DescriptionView,
    DescriptionText,
    DescriptionScroll
} from './styles';

function ProductPage(){
    
    return(
        <Container>

            <ProductView>
                <ProductTitle>Nome do produto</ProductTitle>

                <RowView>
                    <ProductImage />

                    <FeaturesView>
                        <Details>
                            <PriceText>R$ 1.000,00</PriceText>
                            <DetailsText>Quantidade</DetailsText>
                            <DetailsText>3</DetailsText>
                            <DetailsText>Frete</DetailsText>
                            <DetailsText>Calcular</DetailsText>
                        </Details>   
                    </FeaturesView>
                </RowView>
                
            <SubmitButton>
                Comprar
            </SubmitButton>

            </ProductView>

            <DescriptionView>
                <DetailsText>Sobre o produto:</DetailsText>

                <DescriptionScroll>
                        <DescriptionText>
                            AAAAAAAAAAAAAAAAAAAAAAAA
                            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                        
                        </DescriptionText>
                </DescriptionScroll>
            </DescriptionView>
        </Container>
    )
}

export default ProductPage