/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import MaskedInput from '../TextInputMasked';
import { onChange_onlyNumber } from '~/utils/RestrictInputs';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  MultiInput,
  DescriptionForm,
} from './styles';

export default function ProductForm({ onClickSubmit, productData }) {
  const typeOfPlatform = Platform.OS === 'ios';
  const typeOfkeyboardType = typeOfPlatform
    ? 'numbers-and-punctuation'
    : 'numeric';

  const QuantityRef = useRef();
  const DescriptionRef = useRef();

  const [Quantity, setQuantity] = useState(productData.quantity);
  const [Description, setDescription] = useState(productData.description);
  const [Price, setPrice] = useState(productData.price);

  const HandleSubmit = () => {
    onClickSubmit({
      quantity: Quantity,
      description: Description,
      price: Price,
    });
  };

  return (
    <Container>
      <Form>
        <DescriptionForm
          multiline
          autoCorrect
          numberOfLines={4}
          value={Description}
          onChangeText={(description) => setDescription(description)}
          placeholder="Descrição"
          maxLength={350}
          ref={DescriptionRef}
          maxHeight={70}
        />

        <MultiInput>
          <MaskedInput
            type="money"
            placeholder="Preço"
            returnKeyType="next"
            style={{
              width: '47%',
              marginRight: 10,
            }}
            maskedStyle={{
              fontFamily: Price ? null : 'raleway',
            }}
            blurOnSubmit={false}
            value={Price}
            onChangeText={(number) => setPrice(number)}
            onSubmitEditing={() => QuantityRef.current.focus()}
          />

          <FormInput
            placeholder="Quantidade"
            maxLength={5}
            keyboardType={typeOfkeyboardType}
            returnKeyType="next"
            style={{ width: '50%' }}
            blurOnSubmit={false}
            value={Quantity}
            textStyle={{ fontFamily: Quantity ? null : 'raleway' }}
            onChangeText={(number) => onChange_onlyNumber(number, setQuantity)}
            ref={QuantityRef}
          />
        </MultiInput>

        <SubmitButton style={{ background: '#283593' }} onPress={HandleSubmit}>
          Alterar
        </SubmitButton>
      </Form>
    </Container>
  );
}

ProductForm.propTypes = {
  onClickSubmit: PropTypes.func.isRequired,
  productData: PropTypes.shape({
    quantity: PropTypes.number,
    description: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
