import React from 'react';
import LocationForm from '../../components/LocationForm';
import Background from '../../components/Background2';
import { useDispatch, useSelector } from 'react-redux';
import { updateLocationRequest, createLocationRequest } from '../../store/modules/user/actions';

import {
    Container
} from './styles';

export default function ChangeLocationPage({ navigation }){
    const dispatch = useDispatch()
    const location = useSelector(state => state.user.profile.location)

    const handleSubmit = (LocationData) => {
        if(location.id === null){
            dispatch(createLocationRequest(LocationData))
            navigation.goBack()
        }else{
            dispatch(updateLocationRequest(LocationData))
            navigation.goBack()
        }
    }
        

    return(
        <Background>
            <Container>
                <LocationForm onClickSubmit={handleSubmit} location={location} />
            </Container>
        </Background>
    )   
}

ChangeLocationPage.navigationOptions = ({ navigation }) => ({
    title: 'Minha localização'
});