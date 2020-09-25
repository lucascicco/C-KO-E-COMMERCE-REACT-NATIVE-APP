import React, { useRef, useState, useEffect } from 'react';
import { Animated, Keyboard, Platform, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { ImageResizingEventTwo } from '../../utils/KeyboardsEvents';
import Background from '../../components/Background2';
import PersonalPage from '../../components/PersonalForm';
import { createPersonalDataRequest } from '../../store/modules/user/actions';

import { Container, SubmitButton } from './styles';

export default function PersonalInformation({ navigation }) {
  const dispatch = useDispatch();

  const typeOfPlatform = Platform.OS === 'ios';

  const IconSize = new Animated.Value(70);
  const ViewSize = new Animated.Value(100);
  const TextSize = new Animated.Value(35);

  useEffect(() => {
    const typeOfShow = typeOfPlatform ? 'keyboardWillShow' : 'keyboardDidShow';
    const typeOfHide = typeOfPlatform ? 'keyboardWillHide' : 'keyboardDidHide';

    Keyboard.addListener(
      typeOfShow,
      ImageResizingEventTwo('show', IconSize, ViewSize, TextSize)
    );
    Keyboard.addListener(
      typeOfHide,
      ImageResizingEventTwo('hide', IconSize, ViewSize, TextSize)
    );

    return () => {
      Keyboard.removeListener(
        typeOfShow,
        ImageResizingEventTwo('show', IconSize, ViewSize, TextSize)
      );
      Keyboard.removeListener(
        typeOfHide,
        ImageResizingEventTwo('hide', IconSize, ViewSize, TextSize)
      );
    };
  }, []);

  const handleSubmit = (PersonalInfo) => {
    dispatch(
      createPersonalDataRequest(PersonalInfo, navigation, 'LocationPage')
    );
  };

  return (
    <Background>
      <Container>
        <Animated.View style={[styles.TitleView, { height: ViewSize }]}>
          <Animated.Image
            // eslint-disable-next-line global-require
            source={require('../../assets/Information_Icon.png')}
            style={[styles.IconView, { height: IconSize }]}
            resizeMode="contain"
          />

          <Animated.Text style={[styles.TextTitle, { fontSize: TextSize }]}>
            Informações
          </Animated.Text>
        </Animated.View>

        <PersonalPage onClickSubmit={handleSubmit} />

        <SubmitButton
          style={{ background: '#d32f2f' }}
          onPress={() => navigation.navigate('LocationPage')}
        >
          Pular
        </SubmitButton>
      </Container>
    </Background>
  );
}

const styles = StyleSheet.create({
  TitleView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextTitle: {
    fontWeight: 'bold',
    marginRight: 15,
    fontFamily: 'playfair-bold',
  },
  IconView: {
    width: 100,
    marginLeft: 0,
  },
});
