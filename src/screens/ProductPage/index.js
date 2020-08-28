import React, { useState } from 'react';
import NumericInput from 'react-native-numeric-input';

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
    DescriptionScroll,
    CalculateButton,
    DetailsTitle
} from './styles';

function ProductPage(){
    const [quantity, setQuantity] = useState(0)


    return(
        <Container>

            <ProductView>
                <ProductTitle>Nome do produto</ProductTitle>

                <RowView>
                    <ProductImage />

                    <FeaturesView>
                        <Details>
                            <PriceText>R$ 10.000,00</PriceText>
                            <DetailsTitle>Quantidade</DetailsTitle>
                            <NumericInput 
                                onChange={value => setQuantity(value)} 
                                minValue={0}
                                borderColor="black"    
                            />
                            <DetailsTitle>Frete estipulado</DetailsTitle>
                            <DetailsText>R$ 10,00</DetailsText>
                        </Details>   
                    </FeaturesView>
                </RowView>
                
            <SubmitButton>
                Comprar
            </SubmitButton>

            </ProductView>

            <DescriptionView>
                <DetailsTitle>Sobre o produto</DetailsTitle>

                <DescriptionScroll>
                        <DescriptionText>
                            TESTING AREAS
                        </DescriptionText>
                </DescriptionScroll>
            </DescriptionView>
        </Container>
    )
}

export default ProductPage