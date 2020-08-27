import React , {useState }from 'react';
import { RadioButton } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';

import {
    Container,
    TextTitle,
    NormalText,
    ProductImage,
    SliptView,
    FeaturesView,
    TotalText,
    SubmitButton,
    BasicView,
    TotalBasic,
    PaymentTypeView,
    RadioView,
    RadioTitle,
    RadioText
} from './styles';

function PurchaseTotalPage(){
    const [payment, setPayment] = useState('creditcard');

    return(
        <Container>

            <SliptView>
                <ProductImage 
                    source={{ uri: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'}}
                />

                <FeaturesView>
                    <TextTitle>Nome do produto</TextTitle>

                    <BasicView>
                        <NormalText>Preço: R$ 1.000,00</NormalText>
                        <NormalText>Quantidade: 3</NormalText>
                    </BasicView>   

                </FeaturesView>

            </SliptView>

            <SliptView>
                <NormalText>Total produto</NormalText>
                <TotalBasic>TotalValor</TotalBasic>
            </SliptView>

            
            <SliptView>
                <NormalText>Frete</NormalText>
                <TotalBasic>FreteValor</TotalBasic>
            </SliptView>

            <SliptView>
                <NormalText>Valor total</NormalText>
                <TotalText>VALOR TOTAL</TotalText>
            </SliptView>

            <PaymentTypeView>
                <RadioTitle>
                    <NormalText>Forma de pagamento</NormalText>
                    {payment === 'creditcard' ? (
                        <FontAwesome name="credit-card" size={25} color="black" />
                    ) : (
                        <FontAwesome name="money" size={25} color="black" />
                    )}
                </RadioTitle>
                
            
                <TouchableOpacity onPress={() => setPayment('creditcard')}>
                    <RadioView>
                        <RadioButton
                            color="#283593"
                            value="creditcard"
                            status={ payment === 'creditcard' ? 'checked' : 'unchecked' }
                        />

                        <RadioText>
                            Cartão de crédito
                        </RadioText>
        
                    </RadioView>
                </TouchableOpacity>
    

                <TouchableOpacity onPress={() => setPayment('cash')}>
                    <RadioView>
                        <RadioButton
                            color="#283593"
                            value="cash"
                            status={ payment === 'cash' ? 'checked' : 'unchecked' }
                        />
                        <RadioText>
                            Boleto bancário
                        </RadioText>
                    </RadioView>
                </TouchableOpacity>

            </PaymentTypeView>

            <SubmitButton>
                Próximo
            </SubmitButton>
        </Container>
    )
}

export default PurchaseTotalPage