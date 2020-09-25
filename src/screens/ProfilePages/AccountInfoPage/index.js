import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import AvatarView from '~/components/MyProfilePagesComponents/AvatarView';
import ScrollViewX from '~/components/MyProfilePagesComponents/ScrollViewFL/ScrollViewOptions';
import { signOut } from '~/store/modules/auth/actions';
import { addAvatarPicture } from '~/store/modules/user/actions';
import api from '~/services/api';

import { Container } from './styles';

export default function MyAccountOptions({ navigation }) {
  const profile = useSelector((state) => state.user.profile.user);
  const [ProductPicture, setProductImage] = useState(
    profile.avatar ? profile.avatar : ''
  );
  const dispatch = useDispatch();

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        Alert.alert(
          'Acesso negado',
          'Desculpe, precisamos do acesso para continuar.'
        );
      }
    }
  };

  const HandleChoosePhoto = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        const data = new FormData();

        data.append('file', result);

        setProductImage(result.uri);
        console.log(result);

        const response = await api.post('avatar', data);

        console.log(response.data);
      }
    } catch (E) {
      console.log(E);
    }
  };

  useEffect(() => {
    getPermissionAsync();
  }, []);

  return (
    <Container>
      <AvatarView onPress={HandleChoosePhoto} uri={ProductPicture} />

      <ScrollViewX
        navigation={navigation}
        signOut={() => dispatch(signOut())}
      />
    </Container>
  );
}

MyAccountOptions.navigationOptions = () => ({
  headerShown: false,
  title: 'Meu perfil',
});

MyAccountOptions.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};