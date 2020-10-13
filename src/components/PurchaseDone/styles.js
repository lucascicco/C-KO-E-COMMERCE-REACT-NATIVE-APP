import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
  padding: 30px 20px;
`;

export const Title_View_Row = styled.View`
  justify-content: space-between;
  width: 100%;
  border-bottom-width: 1px;
  border-color: black;
  border-style: solid;
  padding-bottom: 10px;
`;

export const Purchase_Success = styled.Text`
  color: #2e7d32;
  font-family: playfair;
  text-align: center;
  font-size: 23px;
  margin-bottom: 10px;
`;

export const Code_View = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Code_Small = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 13px;
  font-style: italic;
`;
export const Code_Bigger = styled.Text`
  font-size: 12px;
  margin-bottom: 3px;
  font-family: raleway;
`;

export const Purchase_data = styled.View`
  border-bottom-width: 1px;
  border-color: black;
  border-style: solid;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
`;

export const Row_View = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Column_View = styled.View`
  flex: 1;
`;

export const Purchase_title = styled.Text`
  font-family: raleway;
  font-size: 15px;
  margin-bottom: 5px;
`;

export const Purchase_small = styled.Text`
  font-size: 16px;
`;

export const Adress_text = styled.Text.attrs({
  numberOfLines: 2,
})`
  width: 100%;
  font-style: italic;
`;

export const Title_Two = styled.Text`
  font-family: playfair;
  font-size: 20px;
  text-align: center;
  margin-bottom: 15px;
`;
export const Seller_View = styled.View`
  margin-top: 10px;
  width: 100%;
  border-bottom-width: 1px;
  border-color: black;
  border-style: solid;
  padding: 10px;
`;

export const Seller_name = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
`;

export const Column_View_Two = styled.View`
  width: 100%;
  margin-top: 10px;
`;
export const Normal_View = styled.View`
  margin-top: 6px;
  flex-direction: row;
  align-items: center;
`;

export const Image_CKO = styled.Image`
  height: 100px;
  width: 100px;
`;

export const CKO_text = styled.Text`
  flex: 1;
  font-size: 12px;
  font-family: raleway;
  text-align: justify;
`;

export const Continue_Button = styled.TouchableOpacity`
  flex-direction: row;
  padding: 5px;
  margin-top: 30px;
`;

export const Continue_Text = styled.Text`
  font-size: 25px;
  font-family: raleway;
  margin-right: 5px;
`;

export const ScrollDetails = styled.ScrollView``;
