import React from 'react';

import {
    Button_Two,
    CartItem_View,
    Cart_title,
    Cart_View_Row,
    Flatlist_ViewTwo,
    Product_Image,
    Details_View,
    Details_Row,
    Details_RowText,
    Details_RowTextItalic,
    Button_Text,
    Status_Text
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
                                <Details_RowText>Status</Details_RowText>
                                <Status_Text status="open">Aberto</Status_Text>     
                            </Details_Row>  
                            
                            <Details_Row>
                                <Details_RowText>Vendas feitas</Details_RowText>
                                <Details_RowTextItalic>20</Details_RowTextItalic>
                            </Details_Row> 

                            <Button_Two onPress={onPress}>
                                <Button_Text>Alterar produto</Button_Text>
                            </Button_Two>
                        </Details_View>
                </Flatlist_ViewTwo>
            </CartItem_View>
    );
}
