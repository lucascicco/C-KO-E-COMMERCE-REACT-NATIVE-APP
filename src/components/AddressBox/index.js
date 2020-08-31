import React from 'react';
import { RadioButton } from 'react-native-paper';

import {
    TouchableButton,
    RadioView,
    BoxAddress,
    BasicText,
    AddressText
} from './styles';

export default function AddressBox({value, onPress, MainAddress, item}) {
    const { city, state, postcode, address, adNumber, neighborhood } = item;

    return (
      <TouchableButton onPress={onPress}>
          <BoxAddress>
              <RadioView>
                  <RadioButton
                      color="black"
                      value={value}
                      status={ MainAddress === value ? 'checked' : 'unchecked'}
    
                  />
                  <AddressText>{MainAddress === value ? 'Endereço Principal' : ''}</AddressText>
              </RadioView>

              <BasicText>{city} - {state}</BasicText>
              <BasicText>{neighborhood}</BasicText>
              <BasicText>{postcode}</BasicText>
              <BasicText>{address}</BasicText>
              <BasicText>N° {adNumber}</BasicText>
          </BoxAddress>
      </TouchableButton>
    );
}
