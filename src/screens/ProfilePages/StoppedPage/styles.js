import styled from 'styled-components/native';

import Button from '~/components/ButtonType1';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 20px 15px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  background: ${(props) => props.style.background};
`;

export const Text_View = styled.View`
  border: 1px solid black;
  justify-content: center;
  padding: 5px;
`;

export const Text_Title = styled.Text`
  font-family: playfair-bold;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`;
export const Text_Text = styled.Text`
  font-family: raleway;
  font-size: 17px;
  text-align: justify;
  margin-bottom: 5px;
`;

export const Date_Text = styled.Text`
  font-style: italic;
  font-size: 15px;
`;
export const Date_date = styled.Text`
  font-weight: bold;
`;

export const Date_View = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

export const Row_View = styled.View`
  flex-direction: row;
  width: 50%;
`;
