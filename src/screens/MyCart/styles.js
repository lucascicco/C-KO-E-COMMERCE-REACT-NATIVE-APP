import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #e0e0e0;
    justify-content: space-between;
`

export const Total_View = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background: #FFF;
    padding: 10px;
    align-items: center;
`
export const Total_Price = styled.Text`
    font-size: 23px;
    font-weight: bold;
`

export const Continue_Button = styled.TouchableOpacity`
    flex-direction: row;
    padding: 5px;
`

export const Continue_Text = styled.Text`
    font-size: 25px;
    font-family: raleway;
    margin-right: 5px;
`