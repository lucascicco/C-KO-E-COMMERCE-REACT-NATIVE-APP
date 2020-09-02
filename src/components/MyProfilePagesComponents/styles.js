import styled from 'styled-components/native';


export const container_one = styled.View`
    height: 100px; 
    border-bottom: 1px;
    border-style: solid;
    border-color: black;
`

export const container_one_title = styled.Text`
    font-family: playfair,
    font-size: 30px;
    text-align: center;
`

export const ScrollView_one = styled.ScrollView`
    flex: 1;
    border: 1px solid red;
    align-items: stretch;
`
export const ScrollViewItem = styled.TouchableOpacity``

export const ViewItem = styled.View`
    height: 65px;
    align-items: center;
    justify-content: center;
`
export const ScrollView_Text = styled.Text`
    font-family: raleway;
`

export const FlatList_View = styled.View`
    flex:1;
`

export const FlatList_Item = styled.View`
    flex-direction: row;
`

export const Flatlist_ViewTwo = styled.View`
    flex-direction: column;
`

export const FlatList_Text = styled.Text`
    font-family: raleway;
`

export const FlatList_Title = styled.Text`
    font-family: playfair;
    font-size: 20px;
`

export const AvatarImage = styled.Image`
    height: 90px;
    width: 90px;
    border-color: black;
    border-width: 1px;
    border-radius: 5px;
`

export const Avatar_View = styled.View`
    flex: 1;
    border: 1px solid red;
`