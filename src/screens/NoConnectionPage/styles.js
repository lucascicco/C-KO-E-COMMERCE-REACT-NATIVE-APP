import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: space-around;
    align-items: center;
    padding: 10px 45px;
`;

export const TextTitle = styled.Text`
    font-size: 25px;
    color: #fff;
`
export const CustomView = styled.View`
    background: #303f9f;
    border-radius: 60px;
    height: 50px;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const LoadingView = styled.View`
    height: 50px;
    width: 100px;
`

export const ImageView = styled.View`
    height: 100px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const WarningText = styled.Text`
    font-size: 65px;
    color: black;
    font-weight: bold;
`