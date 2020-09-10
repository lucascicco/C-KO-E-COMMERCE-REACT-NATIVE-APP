import React, {useState, useEffect} from 'react';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Alert } from 'react-native';
import AvatarView from '../../components/MyProfilePagesComponents/AvatarView';
import ScrollViewX from '../../components/MyProfilePagesComponents/ScrollViewOptions';

import {
    Container
} from './styles';

function MyProductsPage(){
    const [ProductPicture, setProductImage] = useState();

    useEffect(() => {
      async () => {
        await getPermissionAsync()
      }
    }, [])

    getPermissionAsync = async () => {
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

    const HandleChoosePhoto = async  () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });

            if (!result.cancelled) {
                setProductImage(result.uri)
            }
          } catch (E) {
            console.log(E);
          }
    };

    return (
        <Container>
            <AvatarView 
                onPress={HandleChoosePhoto}
                uri={ProductPicture}
            />
            <ScrollViewX />
         </Container>
    )
}

export default MyProductsPage;