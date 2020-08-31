import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';

import SearchInputText from '../../components/TextInput';

const { width, height } = Dimensions.get('window')
const heightPercentage = height * 30 / 100
const heightViewUp = heightPercentage.toString() + 'px';

export const Container = styled.View`
    flex: 1;
    padding: 30px 30px;
`;

export const SearchInput = styled(SearchInputText)`
    margin-top: 15px;
    border-radius: 0px;
`

export const ViewUp = styled.View`
`

export const ViewDown = styled.View``
