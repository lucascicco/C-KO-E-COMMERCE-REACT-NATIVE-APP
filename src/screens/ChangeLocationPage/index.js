import React from 'react';
import LocationForm from '../../components/LocationForm';
import Background from '../../components/Background2';
import { useDispatch, useSelector } from 'react-redux';
import { updateLocationRequest } from '../../store/modules/user/actions';

import {
    Container
} from './styles';

export default function ChangeLocationPage(){
    const dispatch = useDispatch()
    const location = useSelector(state => state.user.profile.location)

    const handleSubmit = (Location) => {
        dispatch(updateLocationRequest(Location))
    }

    return(
        <Background>
            <Container>
                <LocationForm onClickSubmit={handleSubmit} location={location} />
            </Container>
        </Background>
    )   
}

