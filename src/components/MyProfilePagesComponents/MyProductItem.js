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
    Details_RowTextItalic,
    Cart_Row,
    Title_View_Row,
    Multiple_Title,
    Status_Text,
    Change_Product,
    Button_Text
} from './styles';

export default function Flatlist_item({title, selldone, status , onPress}) {
    const statusName = status === 'open' ? 'Aberto' : 'Fechado'

    return (
            <CartItem_View>
                <Title_View_Row>
                    <Multiple_Title>{title}</Multiple_Title>
                </Title_View_Row>

                <Cart_Row>
                    <Product_Image 
                        source={{ uri: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'}}
                    />

                    <Flatlist_ViewTwo>                
                            <Details_View>

                                <Details_Row>
                                    <Details_RowText>Status</Details_RowText>
                                    <Status_Text status={status}>{statusName}</Status_Text>     
                                </Details_Row>  

                                <Details_Row>
                                    <Details_RowText>Vendas feitas</Details_RowText>
                                    <Details_RowTextItalic>{selldone}</Details_RowTextItalic>
                                </Details_Row> 

                                <Cart_Button_View>
                                    <Change_Product>
                                        <Button_Text>Alterar produto</Button_Text>
                                    </Change_Product>

                                    <Cart_button_buy>
                                        <Buy_text>Ver vendas</Buy_text>
                                    </Cart_button_buy>
                                </Cart_Button_View>
                            </Details_View>
                    </Flatlist_ViewTwo>
                </Cart_Row>
            </CartItem_View>
    );
}
