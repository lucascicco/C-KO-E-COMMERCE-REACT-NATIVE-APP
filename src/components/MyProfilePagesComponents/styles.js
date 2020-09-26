import styled from 'styled-components/native';

import Button from '../ButtonType1';

export const Container_one = styled.View`
  height: 100px;
`;

export const Container_one_title = styled.Text`
  font-family: playfair;
  font-size: 30px;
  text-align: center;
`;

export const ScrollView_one = styled.ScrollView`
  flex: 1;
`;
export const ScrollViewItem = styled.TouchableOpacity`
  padding: 0 15px;
  margin: 2px 0;
`;

export const ViewItem = styled.View`
  height: 50px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-color: black;
  border-style: solid;
`;
export const ScrollView_Text = styled.Text`
  font-family: raleway;
  font-size: 20px;
`;

export const FlatList_View = styled.View`
  flex: 1;
`;

export const FlatList_Item = styled.View``;
export const Product_Image = styled.Image`
  height: 85px;
  width: 85px;
  border-radius: 3px;
`;

export const Flatlist_ViewTwo = styled.View`
  flex-direction: column;
  margin-left: 8px;
  flex: 1;
`;

export const FlatList_Text = styled.Text`
  font-family: raleway;
`;

export const FlatList_Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: raleway-bold;
  font-size: 20px;
`;

export const Title_View_Row = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-color: black;
  border-style: solid;
  padding-bottom: 5px;
`;

export const Code_View = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 5px;
`;

export const Code_Small = styled.Text`
  font-size: 12px;
  font-style: italic;
`;
export const Code_Bigger = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 14px;
`;

export const Item_View = styled.View`
  flex-direction: column;
  margin: 5px;
  border: 1px solid #9e9e9e;
  padding: 10px;
  background: #fff;
`;

export const AvatarImage = styled.Image`
  flex: 1;
  border-color: white;
  border-width: 1px;
  border-radius: 60px;
`;

export const Avatar_View = styled.View`
  height: 150px;
  justify-content: center;
  align-items: center;
  background: #4a569a;
  padding: 20px;
`;

export const Text_View = styled.Text`
  font-family: raleway;
  font-size: 23px;
  color: #fff;
  margin-top: 15px;
`;
export const Avatar_ImageView = styled.TouchableOpacity`
  height: 125px;
  width: 125px;
  border-color: white;
  border-width: 1px;
  border-radius: 60px;
  justify-content: center;
  background: #bdbdbd;
`;

export const Alert_ImageView = styled.Text`
  font-family: raleway;
  font-size: 14px;
  text-align: center;
`;

export const Details_View = styled.View`
  flex-direction: column;
`;

export const Details_Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Details_RowText = styled.Text`
  font-size: 14px;
`;
export const Details_RowTextBold = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const Details_RowTextItalic = styled.Text`
  font-size: 14px;
  font-style: italic;
`;

export const Button_One = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 1px solid black;
  margin-top: 10px;
  border-radius: 5px;
`;

export const Button_Text = styled.Text`
  font-family: raleway;
  font-size: 14px;
  text-align: center;
`;
export const Modal_View = styled.View`
  background: #9e9e9e;
  padding: 15px;
  border-radius: 5px;
`;

export const Modal_label = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 3px;
`;

export const Modal_Text = styled.Text`
  font-size: 20px;
  color: #fff;
  font-family: raleway;
`;

export const Modal_TextPhone = styled.Text`
  font-size: 18px;
  color: #fff;
`;
export const Modal_Details = styled.View`
  margin-top: 15px;
`;

export const Modal_View_Email = styled.View``;

export const Email_ScrollView = styled.ScrollView``;

export const Warning_text = styled.Text`
  color: #fff;
`;

export const Email_Form = styled.TextInput.attrs({
  placeholderTextColor: '#bdbdbd',
})`
  font-size: 20px;
  background: #757575;
  height: 125px;
  flex: 1;
  color: #fff;
  font-family: raleway;
  textalignvertical: top;
`;
export const Submit_Button = styled(Button)`
  margin-top: 10px;
  background: ${(props) => props.style.background};
`;

export const Email_Spacing = styled.View`
  background: #757575;
  height: 140px;
  padding: 10px;
`;
export const Email_Lenght = styled.View`
  background: #757575;
  flex-direction: row;
  justify-content: flex-end;
`;

export const View_DimissKeyboard = styled.TouchableWithoutFeedback``;

export const View_ModalTouch = styled.View``;

export const CartItem_View = styled.View`
  flex-direction: column;
  margin: 5px;
  border: 1px solid #9e9e9e;
  padding: 10px;
  background: #fff;
`;
export const Cart_Row = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const Cart_title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: raleway-bold;
  font-size: 16px;
`;

export const Cart_View_Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: black;
  border-style: solid;
  padding-bottom: 5px;
  margin-bottom: 5px;
`;

export const Cart_Button_View = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
  height: 45px;
`;

export const Cart_button_delete = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 1px solid #c62828;
  margin-right: 5px;
`;

export const Cart_button_buy = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 1px solid #43a047;
`;

export const Delete_text = styled.Text`
  font-family: raleway;
  font-size: 15px;
  color: #c62828;
`;

export const Buy_text = styled.Text`
  font-family: raleway;
  font-size: 14px;
  color: #43a047;
  text-align: center;
`;
export const Cart_Buytext = styled.Text`
  font-family: raleway;
  font-size: 15px;
  color: #43a047;
  text-align: center;
`;

export const Cart_FlatListView = styled.View`
  flex: 1;
  padding: 20px 20px;
`;

export const Button_Two = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 1px solid black;
  margin-top: 10px;
`;

export const Status_Text = styled.Text`
  font-size: 14px;
  font-style: italic;
  font-weight: bold;
  color: ${(props) => (props.status === 'open' ? '#8bc34a' : '#c62828')};
`;

export const Purchase_Button = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  padding: 5px;
  border: 1px solid #43a047;
`;

export const Info_Button = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  padding: 5px;
  border: 1px solid black;
  margin-right: 5px;
`;

export const Info_text = styled.Text`
  font-family: raleway;
  font-size: 14px;
  text-align: center;
`;

export const Column_ViewItem = styled.View`
  flex: 1;
`;

export const Row_ViewItem = styled.View`
  flex-direction: row;
  height: 75px;
  padding: 5px;
  border-bottom-width: 1px;
  border-color: black;
  border-style: solid;
  padding-bottom: 5px;
`;

export const Title_Item = styled.Text`
  font-family: raleway;
  font-size: 15px;
  margin-bottom: 5px;
`;

export const Info_itemText = styled.Text`
  font-size: 16px;
`;
export const Address_textOne = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-style: italic;
  font-size: 14px;
`;

export const Address_text = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-style: italic;
  font-size: 14px;
  margin-top: 5px;
`;

export const Row_Picture = styled.View`
  flex-direction: row;
  height: 100px;
`;

export const Column_Picture = styled.View`
  padding: 5px;
  width: 72%;
`;

export const Purchase_Button_View = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
  height: 45px;
`;

export const Column_ViewAdress = styled.View`
  height: 100%;
`;

export const Column_ViewImage = styled.View`
  flex: 1;
  justify-content: center;
`;
export const Info_text_bigger = styled.Text`
  font-family: raleway;
  font-size: 16px;
  text-align: center;
`;

export const LookDetais_Button = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  padding: 5px;
  border: 1px solid #3949ab;
`;

export const LookText = styled.Text`
  font-family: raleway;
  font-size: 20px;
  color: #3949ab;
  text-align: center;
`;

export const Row_NoPicture = styled.View`
  flex-direction: row;
  height: 70px;
  margin-top: 7px;
`;

export const Title_multiple = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: raleway-bold;
  font-size: 20px;
  color: #303f9f;
  width: 68%;
`;

export const Multiple_View = styled.View`
  flex-direction: row;
  margin-top: 7px;
`;
export const Multiple_Column = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const Multiple_Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: raleway-bold;
  font-size: 20px;
  width: 100%;
`;
export const Column_ForImage = styled.View`
  justify-content: center;
`;

export const Change_Product = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  padding: 5px;
  border: 1px solid black;
  margin-right: 5px;
`;
