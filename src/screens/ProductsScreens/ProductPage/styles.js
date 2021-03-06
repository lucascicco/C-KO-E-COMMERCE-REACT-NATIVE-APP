import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Button from '~/components/ButtonType1';
import Input from '~./components/TextInput';

const widthPercentage = Platform.OS === 'ios' ? '90%' : '100%';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

export const ProductView = styled.View`
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 15px;
  width: ${widthPercentage};
`;
export const Title_View = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 35px;
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
  font-family: playfair-bold;
  width: 90%;
`;

export const DetailsText = styled.Text`
  font-size: 17px;
  color: #fff;
`;

export const DetailsTitle = styled.Text`
  font-size: 18px;
  margin: 3px;
  font-family: raleway-bold;
`;

export const PriceText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`;

export const ProductImage = styled.Image`
  height: 150px;
  width: 150px;
  border-color: black;
  border-width: 1px;
  border-radius: 5px;
`;

export const Details = styled.View`
  align-items: center;
`;

export const FeaturesView = styled.View`
  flex-direction: column;
  width: 50%;
  padding: 10px;
`;

export const RowView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
`;

export const CalculateButton = styled(Button)``;

export const QuantityInput = styled(Input)`
  margin-bottom: 10px;
`;

export const TotalText = styled.Text`
  font-weight: bold;
  font-size: 22px;
`;

export const TotalBasic = styled.Text`
  font-size: 22px;
  font-style: italic;
`;

export const DescriptionView = styled.View`
  height: 30%;
  width: ${widthPercentage};
  padding: 10px;
  border-radius: 5px;
  background: #eceff1;
`;

export const DescriptionScroll = styled.ScrollView`
  margin-top: 5px;
`;

export const DescriptionText = styled.Text`
  font-size: 15px;
`;

export const TextWarning = styled.Text`
  color: #fff;
  font-family: raleway;
`;

export const FreteButton = styled.TouchableOpacity`
  margin-top: 10px;
  flex-direction: row;
  padding: 10px;
  border: 1px solid black;
`;

export const FreteText = styled.Text`
  font-family: raleway;
`;

export const LoadingView = styled.View`
  flex: 1;
  justify-content: center;
`;
