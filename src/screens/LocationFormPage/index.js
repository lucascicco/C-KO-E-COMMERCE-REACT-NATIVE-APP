import React, { useEffect } from 'react';
import { Animated, Keyboard, Platform, StyleSheet, Alert } from 'react-native';
import { ImageResizingEventTwo } from '../../utils/KeyboardsEvents';
import Background from '../../components/Background2';
import LocationForm from '../../components/LocationForm';
import { useDispatch } from 'react-redux';
import { createLocationRequest } from '../../store/modules/user/actions';


import { 
    Container,
    SubmitButton
} from './styles';

function LocationPage({ navigation }){
    const dispatch = useDispatch()

    const typeOfPlatform = Platform.OS === 'ios'

    const IconSize = new Animated.Value(70) 
    const ViewSize = new Animated.Value(100)
    const TextSize = new Animated.Value(35)

    useEffect(() => {
        const typeOfShow = typeOfPlatform ?  'keyboardWillShow' : 'keyboardDidShow'
        const typeOfHide = typeOfPlatform ? 'keyboardWillHide' : 'keyboardDidHide'

            Keyboard.addListener(typeOfShow, ImageResizingEventTwo('show', IconSize, ViewSize, TextSize));
            Keyboard.addListener(typeOfHide, ImageResizingEventTwo('hide', IconSize, ViewSize, TextSize));

            return () => {
                 Keyboard.removeListener(typeOfShow, ImageResizingEventTwo('show', IconSize, ViewSize, TextSize));
                 Keyboard.removeListener(typeOfHide, ImageResizingEventTwo('hide', IconSize, ViewSize, TextSize));
            }
    }, [])
    
    const handleSubmit = (Location) => {
        dispatch(createLocationRequest(Location))
    }

    return(
        <Background>
            <Container>
               <Animated.View 
                   style={[styles.TitleView, { height: ViewSize }]}
               >
                   <Animated.Image 
                       source={require('../../assets/Geolocation_icon.png')}
                       style={[styles.IconView, { height: IconSize}]}
                       resizeMode="contain"
                   />    

                   <Animated.Text 
                       style={[styles.TextTitle, { fontSize: TextSize }]}
                   >
                       Localização
                   </Animated.Text>
               </Animated.View>

                <LocationForm onClickSubmit={handleSubmit} />

               <SubmitButton style={{ background: '#d32f2f'}} onPress={() => navigation.navigate('App')}>
                   Pular
               </SubmitButton>

            </Container>
        </Background>
    )
}

const styles = StyleSheet.create({
    TitleView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextTitle: {
        fontWeight: 'bold',
        marginRight: 15,
        fontFamily: 'playfair-bold'
    },
    IconView: {
        width: 100,
        marginLeft: 0
    }
}) 

export default LocationPage