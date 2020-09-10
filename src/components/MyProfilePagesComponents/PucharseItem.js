import React from 'react';

import {
    Item_View,
    FlatList_Item,
    Flatlist_ViewTwo,
    FlatList_Text,
    Button_One,
    Button_Text,
    Code_View,
    Code_Small,
    Code_Bigger,
    Title_View_Row,
    FlatList_Title,
    Product_Image,
    Details_View,
    Details_Row,
    Details_RowText,
    Details_RowTextBold,
    Details_RowTextItalic,
    Purchase_Button,
    Info_Button,
    Info_text,
    Column_ViewItem
} from './styles';

export default function Flatlist_item({title, onPress}) {
    return (
        <Item_View>
            <Title_View_Row>
                <FlatList_Title>{title}</FlatList_Title>

                <Code_View>
                       <Code_Small>Código</Code_Small>
                       <Code_Bigger>#112784520</Code_Bigger>
                </Code_View>
            </Title_View_Row>

            <FlatList_Item>
                <Product_Image 
                    source={{ uri: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'}}
                />

                <Flatlist_ViewTwo>                
                        <Details_View>
                            <Details_Row>
                                <Details_RowTextBold>Total: R$ 2.000</Details_RowTextBold>          
                                <Details_RowTextItalic>Qnt: 3</Details_RowTextItalic>
                            </Details_Row>  

                            <Details_Row>
                                <Details_RowText>Data da compra</Details_RowText>
                                <Details_RowTextItalic>18/02/2000</Details_RowTextItalic>
                            </Details_Row> 

                            <Details_Row>
                                <Details_RowText>Pagamento</Details_RowText>
                                <Details_RowTextItalic>Dinheiro</Details_RowTextItalic>
                            </Details_Row>

                            <Details_Row>
                                <Details_RowText></Details_RowText>
                                <Details_RowTextItalic>Dinheiro</Details_RowTextItalic>
                            </Details_Row>

                            <Details_Row>
                                <Details_RowText></Details_RowText>
                                <Details_RowTextItalic>Dinheiro</Details_RowTextItalic>
                            </Details_Row>

                            <Cart_Button_View>
                                <Info_Button onPress={onPress}>
                                    <Info_text>Contato do vendedor</Info_text>
                                </Info_Button>

                                <Purchase_Button>
                                    <Buy_text>Comprar novamente</Buy_text>
                                </Purchase_Button>
                            </Cart_Button_View>

                        </Details_View>
                    </Flatlist_ViewTwo>
            </FlatList_Item>
        </Item_View>
    );
}
