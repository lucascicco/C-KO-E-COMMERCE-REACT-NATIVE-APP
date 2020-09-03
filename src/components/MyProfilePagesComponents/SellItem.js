import React from 'react';

import {
    FlatList_Item,
    Flatlist_ViewTwo,
    FlatList_Text,
    FlatList_Title,
    Product_Image,
    Details_View,
    Details_Row,
    Details_RowText,
    Details_RowTextBold,
    Details_RowTextItalic,
    Button_One,
    Button_Text
} from './styles';

export default function Flatlist_item({title, onPress}) {
    return (
        <FlatList_Item>
            <Product_Image 
                source={{ uri: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'}}
            />
            <Flatlist_ViewTwo>
                <FlatList_Title>{title}</FlatList_Title>
                
                <Details_View>
                    <Details_Row>
                        <Details_RowTextBold>Total: R$ 2.000</Details_RowTextBold>          
                        <Details_RowTextItalic>Qnt: 3</Details_RowTextItalic>
                    </Details_Row>  

                    <Details_Row>
                        <Details_RowText>Data da venda</Details_RowText>
                        <Details_RowTextItalic>18/02/2000</Details_RowTextItalic>
                    </Details_Row> 

                    <Details_Row>
                        <Details_RowText>Pagamento</Details_RowText>
                        <Details_RowTextItalic>Dinheiro</Details_RowTextItalic>
                    </Details_Row>
                    
                    <Button_One onPress={onPress}>
                        <Button_Text>Contato do comprador</Button_Text>
                    </Button_One>
                </Details_View>
            </Flatlist_ViewTwo>
        </FlatList_Item>
    );
}
