import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccountForm from '../../components/ChangeAccount';
import Background from '../../components/Background2';
import { updateAccountRequest } from '../../store/modules/user/actions';

import { Container } from './styles';

export default function ChangeAccountPage({ navigation }) {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.user.profile.user);

  const handleSubmit = (AccountInfo) => {
    dispatch(updateAccountRequest(AccountInfo, navigation));
  };

  return (
    <Background>
      <Container>
        <AccountForm onClickSubmit={handleSubmit} account={account} />
      </Container>
    </Background>
  );
}

ChangeAccountPage.navigationOptions = ({ navigation }) => ({
  title: 'Minha conta',
  headerBackTitle: 'Voltar',
});
