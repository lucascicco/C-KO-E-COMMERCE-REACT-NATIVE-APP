import React from 'react';

import {
    CartItem_View,
    Cart_title,
    Cart_View_Row,
    Cart_button_delete,
    Cart_button_buy,
    Delete_text,
    Buy_text,
    Flatlist_ViewTwo,
    Cart_Button_View,
    Product_Image,
    Details_View,
    Details_Row,
    Details_RowText,
    Details_RowTextBold,
    Details_RowTextItalic
} from './styles';

export default function Flatlist_item({title, onPress}) {
    return (
            <CartItem_View>
                <Product_Image 
                    source={{ uri: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'}}
                />

                <Flatlist_ViewTwo>                
                        <Details_View>
                            <Cart_View_Row>
                                <Cart_title>{title}</Cart_title>
                            </Cart_View_Row>

                            <Details_Row>
                                <Details_RowTextBold>Preço: R$ 2.000</Details_RowTextBold>          
                            </Details_Row>  

                            <Details_Row>
                                <Details_RowText>Disponibilidade</Details_RowText>
                                <Details_RowTextItalic>Esgotado</Details_RowTextItalic>
                            </Details_Row> 

                            <Cart_Button_View>
                                <Cart_button_delete>
                                    <Delete_text>Excluir</Delete_text>
                                </Cart_button_delete>

                                <Cart_button_buy>
                                    <Buy_text>Comprar</Buy_text>
                                </Cart_button_buy>
                            </Cart_Button_View>
                        </Details_View>
                </Flatlist_ViewTwo>
            </CartItem_View>
    );
}
