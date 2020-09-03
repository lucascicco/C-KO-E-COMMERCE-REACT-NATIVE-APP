import styled from 'styled-components/native';

import Button from '../ButtonType1'

export const Container_one = styled.View`
    height: 100px; 
`

export const Container_one_title = styled.Text`
    font-family: playfair;
    font-size: 30px;
    text-align: center;
`

export const ScrollView_one = styled.ScrollView`
    flex: 1;
    border: 1px solid blue;
`
export const ScrollViewItem = styled.TouchableOpacity`
    padding: 0 15px;
    margin: 2px 0;
`

export const ViewItem = styled.View`
    height: 50px;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-top-width: 1px;
    borderColor: black;
    borderStyle: solid;
`
export const ScrollView_Text = styled.Text`
    font-family: raleway;
    font-size: 20px;
`

export const FlatList_View = styled.View`
    flex:1;
`

export const FlatList_Item = styled.View`
    flex-direction: row;
    align-items: center;
`
export const Product_Image = styled.Image`
    height: 85px;
    width: 85px;
    border-radius: 3px;
`

export const Flatlist_ViewTwo = styled.View`
    flex-direction: column;
    margin-left: 8px;
    flex: 1;
    padding: 5px;
`

export const FlatList_Text = styled.Text`
    font-family: raleway;
`

export const FlatList_Title = styled.Text.attrs({
    numberOfLines: 1
})`
    font-family: raleway-bold;
    font-size: 20px;
    width: 68%;
`

export const Title_View_Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    border-bottom-width: 1px;
    borderColor: black;
    borderStyle: solid;
    paddingBottom: 5px;
`

export const Code_View = styled.View`
    flex-direction: column;
    width: 30%;
    align-items: center;
`

export const Code_Small = styled.Text`
    font-size: 12px;
    font-style: italic;
`
export const Code_Bigger = styled.Text`
    font-size: 15px;
`

export const Item_View =  styled.View`
    flex-direction: column;
    margin: 5px;
    border: 1px solid #9e9e9e;
    padding: 10px;
    background: #FFF;
    align-items: center;
    justify-content: space-between;
`

export const AvatarImage = styled.Image`
    flex: 1;
    border-color: white;
    border-width: 1px;
    border-radius: 60px;
`

export const Avatar_View = styled.View`
    height: 250px;
    justify-content: center;
    align-items: center;
    background: #512da8;
    padding: 20px;
`

export const Text_View = styled.Text`
    font-family: raleway;
    font-size: 23px;
    color: #FFF;
    margin-top: 15px;
`
export const Avatar_ImageView = styled.TouchableOpacity`
    height: 125px;
    width: 125px;
    border-color: white;
    border-width: 1px;
    border-radius: 60px;
    justify-content: center;
    background: #bdbdbd;
`

export const Alert_ImageView = styled.Text`
    font-family: raleway;
    font-size: 14px;
    text-align: center;
`

export const Details_View = styled.View`
    flex-direction: column;
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

export const Button_One = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border: 1px solid black;
    margin-top: 10px;
    border-radius: 5px;
`

export const Button_Text =  styled.Text`
    font-size: 16px;
`
export const Modal_View = styled.View`
    background: #9e9e9e;
    padding: 15px;
    border-radius: 5px;
`

export const Modal_label = styled.Text`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 3px;
`

export const Modal_Text = styled.Text`
    font-size: 20px;
    color: #FFF;
    font-family: raleway;
` 

export const Modal_TextPhone = styled.Text`
    font-size: 18px;
    color: #FFF;
` 
export const Modal_Details = styled.View`
    margin-top: 15px;
`

export const Modal_View_Email = styled.View``

export const Email_ScrollView = styled.ScrollView``

export const Warning_text = styled.Text`
    color: #FFF;
`

export const Email_Form = styled.TextInput.attrs({
    placeholderTextColor: '#bdbdbd',
  })`
    font-size: 20px;
    background: #757575;
    height: 125px;
    flex: 1;
    color: #FFF;
    font-family: raleway;
    textAlignVertical: top;
`
export const Submit_Button = styled(Button)`
    margin-top: 10px;
    background: ${props => props.style.background}
`
export const Email_Spacing = styled.View`
    background: #757575;
    height: 140px;
    padding: 10px;
`
export const Email_Lenght = styled.View`
    background: #757575;
    flex-direction: row;
    justify-content: flex-end;
`

export const View_DimissKeyboard = styled.TouchableWithoutFeedback``

export const View_ModalTouch = styled.View``
