import styled from 'styled-components/native';

export const PurchaseCartFlatList =  styled.View`
    flex-direction: row;
`

export const Product_Image = styled.Image`
    height: 85px;
    width: 85px;
    border-radius: 3px;
`
export const Second_View = styled.View`
    flex-column: column;
`

export const Text_View = styled.View`
    flex-direction: row;
    border-bottom-width: 1px;
    borderColor: black;
    borderStyle: solid;
    paddingBottom: 5px;
`

export const Text_Text = styled.Text`
    font-family: raleway;
    font-size: 15px;
`

export const Details_Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const Details_RowText = styled.Text`
    font-size: 14px;
`

export const Details_RowTextBold = styled.Text`
    font-size: 14px;
    font-weight: bold
`
export const Details_RowTextItalic = styled.Text`
    font-size: 14px;
    font-style: italic;
`
export const Purchase_Flatlist = styled.View`
    flex: 1;
`