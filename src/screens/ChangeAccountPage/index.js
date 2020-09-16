import React from 'react';
import AccountForm from '../../components/ChangeAccount';
import Background from '../../components/Background2';
import { useDispatch, useSelector } from 'react-redux';
import { updateAccountRequest } from '../../store/modules/user/actions';

import {
    Container
} from './styles';

export default function ChangeAccountPage(){
    const dispatch = useDispatch()
    const account = useSelector(state => state.user.profile.user)

    const handleSubmit = (AccountInfo) => {
        dispatch(updateAccountRequest(AccountInfo))
    }

    return(
        <Background>
            <Container>
                <AccountForm onClickSubmit={handleSubmit} account={account} />
            </Container>
        </Background>
    )
}
