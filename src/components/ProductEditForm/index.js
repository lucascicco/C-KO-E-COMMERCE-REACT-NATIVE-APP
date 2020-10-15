/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import MaskedInput from '../TextInputMasked';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  MultiInput,
  DescriptionForm,
} from './styles';

export default function ProductForm({ onClickSubmit, productData }) {
  const QuantityRef = useRef();
  let moneyField;
  const DescriptionRef = useRef();


  const [Quantity, setQuantity] = useState(`${productData.quantity}`);
  const [Description, setDescription] = useState(productData.description);
  const [Price, setPrice] = useState(productData.price);

  const HandleSubmit = () => {
    const price = Price === productData.price ? productData.price : moneyField.getRawValue()

    onClickSubmit({
      quantity: Quantity,
      description: Description,
      price,
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
          maxHeight={200}
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
            ref={(ref) => moneyField = ref}
            onSubmitEditing={() => QuantityRef.current.focus()}
          />

          <FormInput
            placeholder="Quantidade"
            maxLength={3}
            keyboardType="number-pad"
            returnKeyType="next"
            style={{ width: '50%' }}
            blurOnSubmit={false}
            value={Quantity}
            onChangeText={(number) => setQuantity(number)}
            textStyle={{ fontFamily: Quantity ? null : 'raleway' }}
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
