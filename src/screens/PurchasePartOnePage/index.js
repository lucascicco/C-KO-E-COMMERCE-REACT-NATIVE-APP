import React , {useState }from 'react';
import { RadioButton } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons'; 
import { TouchableOpacity, Modal} from 'react-native';
import ChangeAddressView from '../../components/ChangeAddress';
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
    const [visible, setVisibility] = useState(false)
    
    const handleModalVisibilty = () => {
        setVisibility(!visible)
    }

    return(
        <Background>
            <Container>
                <ScrollPurchase>
                    <SliptView>
                        <ProductImage 
                            source={{ uri: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'}}
                        />

                        <FeaturesView>
                            <TextTitle>Nome do produto</TextTitle>

                            <BasicView>
                                <TextDetails>R$ 10.000,00</TextDetails>
                               
                                <TextIndent>
                                    <NormalText>Quantidade:</NormalText>
                                    <TextDetails style={{marginLeft: 5}}>3</TextDetails>
                                </TextIndent>           
                            </BasicView>   

                        </FeaturesView>

                    </SliptView>

                    <SliptView>
                        <AddressView>
                            <NormalText>Endereço de entrega</NormalText>
                            <SmallText>07096-080 Rua Ronaldo</SmallText>    
                        </AddressView>

                        <TouchableOpacity onPress={handleModalVisibilty}>
                            <ChangeButton>
                                <ButtonText>Trocar</ButtonText>
                            </ChangeButton>
                        </TouchableOpacity>

                    </SliptView>

                    <SliptView>
                        <NormalText>Total produto</NormalText>
                        <TotalBasic>R$ 100</TotalBasic>
                    </SliptView>

                    <SliptView>
                        <NormalText>Frete</NormalText>
                        <TotalBasic>R$ 100</TotalBasic>
                    </SliptView>

                    <SliptView>
                        <NormalText>Valor total</NormalText>
                        <TotalText>R$ 100</TotalText>
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

            <Modal
                visible={visible}
                animationType="slide"
            >   
                <ChangeAddressView onPressOne={() => setVisibility(!visible)}/>
            </Modal>
        </Background>
    )
}

export default PurchaseTotalPage