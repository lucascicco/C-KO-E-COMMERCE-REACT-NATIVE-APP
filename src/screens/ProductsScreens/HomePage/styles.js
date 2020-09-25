import styled from 'styled-components/native';
import SearchInputText from '~./components/TextInput';
import SubmitButtonComponent from '~/components/ButtonType1';

export const Container = styled.View`
  flex: 1;
  padding: 30px 30px;
`;

export const SearchInput = styled(SearchInputText)`
  border-radius: 0px;
`;
export const ViewUp = styled.View`
  flex-direction: row;
`;

export const ViewDown = styled.View``;

export const ButtonCategory = styled.TouchableOpacity`
  background: #90a4ae;
  justify-content: center;
  margin-left: 5px;
  padding: 5px;
`;

export const HighestView = styled.View`
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const ButtonCart = styled.TouchableOpacity`
  background: #90a4ae;
  justify-content: center;
  padding: 5px;
`;

export const LogoView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LogoImage = styled.Image`
  height: 50px;
  width: 50px;
`;
export const TextTitle = styled.Text`
  font-size: 30px;
  font-family: raleway-bold;
`;

export const ModalView = styled.View`
  background: #fff;
  border-radius: 5px;
  padding: 5px;
`;

export const SubmitButton = styled(SubmitButtonComponent)`
  margin: 3px auto;
  width: 80%;
  background: ${(props) => props.style.background};
`;
export const FilterText = styled.Text`
  font-style: italic;
  font-size: 14px;
`;
export const FilterView = styled.View`
  flex-direction: column;
  margin-top: 6px;
  height: 23px;
`;

export const TouchableButton = styled.TouchableOpacity``;

export const ButtonView = styled.View`
  border-radius: 4px;
  height: 46px;
  align-items: center;
  justify-content: center;
  background: #283593;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  font-family: raleway;
`;

export const CleanText = styled.Text`
  font-size: 15px;
  color: #3949ab;
`;
