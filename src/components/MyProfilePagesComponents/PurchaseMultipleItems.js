import React from 'react';

import {
    Item_View,
    FlatList_Item,
    Code_View,
    Code_Small,
    Code_Bigger,
    Title_View_Row,
    Column_ViewItem,
    Row_ViewItem,
    Title_Item,
    Info_itemText,
    Address_text,
    Buy_text,
    Row_Picture,
    Column_Picture,
    Purchase_Button_View,
    Column_ViewAdress,
    Column_ViewImage,
    LookDetais_Button,
    LookText,
    Row_NoPicture,
    Title_multiple
} from './styles';

export default function Flatlist_item({title, onPress}) {
    return (
        <Item_View>
            <Title_View_Row>
                <Title_multiple>Pedido múltiplo</Title_multiple>

                <Code_View>
                       <Code_Small>Código</Code_Small>
                       <Code_Bigger>#112784520</Code_Bigger>
                </Code_View>
            </Title_View_Row>

            <FlatList_Item>   
                    <Row_ViewItem>
                        <Column_ViewItem>
                            <Title_Item>Total R$</Title_Item>
                            <Info_itemText>20.000,00</Info_itemText>
                        </Column_ViewItem>

                        <Column_ViewItem>
                            <Title_Item>Data da compra</Title_Item>
                            <Info_itemText>18/01/2000</Info_itemText>
                        </Column_ViewItem>          
                        
                        <Column_ViewItem>
                            <Title_Item>Pagamento</Title_Item>
                            <Info_itemText>Cartão de crédito</Info_itemText>  
                        </Column_ViewItem>
                    </Row_ViewItem>

                    <Row_NoPicture>
                        <Column_ViewAdress>
                            <Title_Item>Endereço de entrega</Title_Item>
                            <Address_text>ssssssssssssssssssssssssssssssssssssssssssssssss</Address_text>
                        </Column_ViewAdress>  
                    </Row_NoPicture>

                    
                    <Purchase_Button_View>
                        <LookDetais_Button onPress={onPress}>
                            <LookText>Ver mais</LookText>
                        </LookDetais_Button>
                    </Purchase_Button_View>

            </FlatList_Item>
        </Item_View>
    );
}
