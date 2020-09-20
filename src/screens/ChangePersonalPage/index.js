import React from 'react';
import PersonalPage from '../../components/PersonalForm';
import Background from '../../components/Background2';
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonalDataRequest, createPersonalDataRequest } from '../../store/modules/user/actions';

import {
    Container
} from './styles';


export default function ChangePersonalPage({ navigation }){
    const dispatch = useDispatch()
    const personal = useSelector(state => state.user.profile.personal_data)

    const handleSubmit = (PersonalInfo) => {
        if(personal.id === null){
            dispatch(createPersonalDataRequest(PersonalInfo))
            navigation.goBack()
        }else{
            dispatch(updatePersonalDataRequest(PersonalInfo))
            navigation.goBack()
        }
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
    title: 'Minhas informações',
    headerBackTitle: 'Voltar'
});