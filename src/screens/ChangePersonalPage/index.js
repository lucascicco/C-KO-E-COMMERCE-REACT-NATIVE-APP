import React from 'react';
import PersonalPage from '../../components/PersonalForm';
import Background from '../../components/Background2';
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonalDataRequest } from '../../store/modules/user/actions';

import {
    Container
} from './styles';


export default function ChangePersonalPage(){
    const dispatch = useDispatch()
    const personal = useSelector(state => state.user.profile.personal_data)

    const handleSubmit = (PersonalInfo) => {
        dispatch(updatePersonalDataRequest(PersonalInfo))
    }

    return(
        <Background>
            <Container>
                <PersonalPage onClickSubmit={handleSubmit} personal={personal} />
            </Container>
        </Background>
    )
}

ChangePersonalPage.navigationOptions = ({ navigation }) => ({
    title: 'Minhas informações'
});