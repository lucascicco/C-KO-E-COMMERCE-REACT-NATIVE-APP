import React, { useState } from 'react';
import NumericInput from 'react-native-numeric-input';
import Background from '../../components/Background';
import { StyleSheet } from 'react-native';

import { 
    Container,
    ProductView,
    ProductTitle,
    DetailsText,
    Details,
    PriceText,
    ProductImage,
    FeaturesView,
    SubmitButton,
    RowView,
    DescriptionView,
    DescriptionText,
    DescriptionScroll,
    DetailsTitle
} from './styles';

function ProductPage(){
    const [quantity, setQuantity] = useState(0)

    return(
       <Background>
            <Container>
                <ProductView>
                    <ProductTitle>Nome do produto</ProductTitle>

                    <RowView>
                        <ProductImage 
                            source={{ uri: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'}}
                        />

                        <FeaturesView>
                            <Details>
                                <PriceText>R$ 10.000,00</PriceText>
                                <DetailsTitle>Quantidade</DetailsTitle>
                                <NumericInput 
                                    onChange={value => setQuantity(value)} 
                                    minValue={0}
                                    maxValue={3}
                                    borderColor="black"
                                    textColor="black"
                                    inputStyle={{
                                        fontSize: 18,
                                        backgroundColor: 'white',
                                        borderColor: 'black',
                                        borderWidth: 1
                                    }} 
                                    rightButtonBackgroundColor="#b0bec5"
                                    leftButtonBackgroundColor="#b0bec5"
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

                <DescriptionView style={styles.ShadowConfig}>
                    <DetailsTitle>Sobre o produto</DetailsTitle>

                    <DescriptionScroll>
                            <DescriptionText>
                                TESTING AREAS
                            </DescriptionText>
                    </DescriptionScroll>
                </DescriptionView>
            </Container>
       </Background>
    )
}

const styles = StyleSheet.create({
    ShadowConfig: {
        shadowColor: "black",
        shadowOffset: {
        	width: 2,
        	height: 8,
        },
        shadowOpacity: 0.65,
        shadowRadius: 2.00,
        elevation: 12
    }
})

export default ProductPage