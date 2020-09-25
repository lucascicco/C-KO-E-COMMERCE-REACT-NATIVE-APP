import styled from 'styled-components/native';

export const Container = styled.View`
  background: #546e7a;
  border-radius: 4px;
  height: 46px;
  padding: 0 15px;
  flex-direction: row;
  align-items: center;
`;

export const TextInputType1 = styled.TextInput.attrs({
  placeholderTextColor: '#FFF',
})`
  flex: 1;
  color: #fff;
  font-size: 18px;
  margin-left: 7px;
  font-family: raleway;
`;
