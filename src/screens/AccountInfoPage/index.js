import React, {useState, useEffect} from 'react';
import ScrollViewX from '../../components/MyProfilePagesComponents/ScrollViewOptions';
import AvatarView from '../../components/MyProfilePagesComponents/AvatarView';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import {
    Container
} from './styles';

function MyProductsPage(){
    const [ProductPicture, setProductImage] = useState();

    useEffect(() => {
        getPermissionAsync()
    }, [])

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
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