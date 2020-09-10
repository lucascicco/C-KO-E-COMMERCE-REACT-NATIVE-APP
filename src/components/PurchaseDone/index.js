import React from 'react';
import Background from '../Background';
import { AntDesign } from '@expo/vector-icons'; 

import {
    Container,
    Title_View_Row,
    Purchase_Success,
    Code_View,
    Code_Small,
    Code_Bigger,
    Purchase_data,
    Row_View,
    Column_View,
    Purchase_title,
    Purchase_small,
    Title_Two,
    Seller_View,
    Seller_name,
    Adress_text,
    Column_View_Two,
    Normal_View,
    Image_CKO,
    CKO_text,
    Continue_Button,
    Continue_Text
} from './styles';


function PurchaseDone({ onPressOne }){
    return(  
        <Container>
            <Title_View_Row>
                <Purchase_Success>Compra realizada com sucesso!</Purchase_Success>
            
                <Code_View>
                    <Code_Bigger>Código do pedido</Code_Bigger>
                    <Code_Small>#195956456161611164678678454655465131</Code_Small>
                </Code_View>
            </Title_View_Row>

            <Purchase_data>
                <Row_View>
                    <Column_View>
                        <Purchase_title>Data da Compra</Purchase_title>
                        <Purchase_small>18/01/2000</Purchase_small>
                    </Column_View>

                    <Column_View>
                        <Purchase_title>Total</Purchase_title>
                        <Purchase_small>R$ 50.000,00</Purchase_small>
                    </Column_View>
                </Row_View>
            
                <Column_View_Two>
                    <Purchase_title>Endereço de entrega</Purchase_title>
                    <Adress_text>
                        São paulo, Brasil. Sp, Guarulhos. Rua Ronaldo, 542.  Jd Santa mena.
                    </Adress_text>
                </Column_View_Two>
            </Purchase_data>

            <Seller_View>
                <Title_Two>Dados do vendedor</Title_Two>

                <Row_View>
                    <Column_View>
                        <Purchase_title>Nome</Purchase_title>
                        <Seller_name>Machado de Assis</Seller_name>
                    </Column_View>

                    <Column_View>
                        <Purchase_title>Telefone</Purchase_title>
                        <Purchase_small>(11) - 947016590</Purchase_small>
                    </Column_View>
                </Row_View>

                <Column_View_Two>
                    <Purchase_title>Email para contato</Purchase_title>
                    <Adress_text>
                        MachadodeAssis@gmail.com
                    </Adress_text>
                </Column_View_Two>
            </Seller_View>

            <Normal_View>
                <Image_CKO 
                    source={require('../../assets/Cko_logo.png')}
                />
                <CKO_text>
                    Agradecemos pela sua confiança. 
                    Mas, agora é com a nossa equipe
                    trabalhar com qualidade para
                    garantir que seu pedido seja
                    um sucesso. EQUIPE C-KO.
                </CKO_text>
            </Normal_View>

            <Continue_Button>
                <Continue_Text>Continuar comprando</Continue_Text>
                <AntDesign name="arrowright" size={30} color="black" />
            </Continue_Button>
        </Container>
    )
}

export default PurchaseDone