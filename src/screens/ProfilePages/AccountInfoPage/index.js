/* eslint-disable no-console */
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
  const [AvatarPicture, setAvatarPicture] = useState(
    profile.avatar ? profile.avatar.url : ''
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
        base64: true,
        quality: 1,
      });

      if (!result.cancelled) {
        const formData = new FormData();
        const path = result.uri.split('/');
        const name = path[path.length - 1];

        formData.append('file', {
          uri: result.uri,
          name,
          type: `image/${result.type}`,
        });

        setAvatarPicture(result.uri);

        const response = await api.post('avatar', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        setAvatarPicture(response.data.url);

        dispatch(addAvatarPicture(response.data));
      }
    } catch (E) {
      console.log(E);
    }
  };

  useEffect(() => {
    console.log(profile);
    getPermissionAsync();
  }, []);

  return (
    <Container>
      <AvatarView onPress={HandleChoosePhoto} uri={AvatarPicture} />

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
