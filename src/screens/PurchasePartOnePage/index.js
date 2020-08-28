import React , {useState }from 'react';
import { RadioButton } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';
import { setCustomText } from 'react-native-global-props';

import Background from '../../components/Background'

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
    RadioText,
    ScrollPurchase,
    SmallText,
    AddressView,
    ButtonText,
    ChangeButton,
    TextDetails,
    TextIndent
} from './styles';

function PurchaseTotalPage(){
    const [payment, setPayment] = useState('creditcard');

    return(
        <Background>
            <Container>
                <ScrollPurchase>
                    <SliptView>
                        <ProductImage 
                            source={{ uri: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'}}
                        />

                        <FeaturesView>
                            <TextTitle numberOfLines={1}>Nome do produto</TextTitle>

                            <BasicView>
                                <TextDetails>R$ 10.000,00</TextDetails>
                               
                                <TextIndent>
                                    <NormalText>Quantidade</NormalText>
                                    <TextDetails>3</TextDetails>
                                </TextIndent>           
                            </BasicView>   

                        </FeaturesView>

                    </SliptView>

                    <SliptView>
                        <AddressView>
                            <NormalText>Endereço de entrega</NormalText>
                            <SmallText>07096-080 Rua Ronaldo</SmallText>    
                        </AddressView>

                        <TouchableOpacity onPress={() => console.log('Open the modal')}>
                            <ChangeButton>
                                <ButtonText>Trocar</ButtonText>
                            </ChangeButton>
                        </TouchableOpacity>

                    </SliptView>

                    <SliptView>
                        <NormalText>Total produto</NormalText>
                        <TotalBasic>R$ TotalValor</TotalBasic>
                    </SliptView>

                    <SliptView>
                        <NormalText>Frete</NormalText>
                        <TotalBasic>R$ FreteValor</TotalBasic>
                    </SliptView>

                    <SliptView>
                        <NormalText>Valor total</NormalText>
                        <TotalText>R$ VALOR TOTAL</TotalText>
                    </SliptView>

                    <PaymentTypeView>
                        <RadioTitle>
                            <NormalText>Forma de pagamento</NormalText>
                            {payment === 'creditcard' ? (
                                <FontAwesome name="credit-card" size={25} color="white" />
                            ) : (
                                <FontAwesome name="money" size={25} color="white" />
                            )}
                        </RadioTitle>
                            
                            
                        <TouchableOpacity onPress={() => setPayment('creditcard')}>
                            <RadioView>
                                <RadioButton
                                    color="white"
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
                                    color="white"
                                    value="cash"
                                    status={ payment === 'cash' ? 'checked' : 'unchecked' }
                                />
                                <RadioText>
                                    Boleto bancário
                                </RadioText>
                            </RadioView>
                        </TouchableOpacity>
                            
                    </PaymentTypeView>
                </ScrollPurchase>

                <SubmitButton>Continuar</SubmitButton>

            </Container>
        </Background>
    )
}

export default PurchaseTotalPage