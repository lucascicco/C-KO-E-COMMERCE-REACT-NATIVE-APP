import React, { useState, useRef } from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';

import MaskedInput from '../TextInputMasked';
// eslint-disable-next-line import/no-unresolved
import Picker from '../Picker';

import Categorias from '~/utils/Categorias.js';

import { onChange_onlyText, onChange_onlyNumber } from '~/utils/RestrictInputs';

import { Container, Form, FormInput, SubmitButton, MultiInput } from './styles';

export default function ProductForm({ onClickSubmit }) {
  const typeOfPlatform = Platform.OS === 'ios';
  const typeOfkeyboardType = typeOfPlatform
    ? 'numbers-and-punctuation'
    : 'numeric';

  const ProductNameRef = useRef();
  const QuantityRef = useRef();
  let PriceRef;

  const [ProductName, setProductName] = useState('');
  const [Category, setCategory] = useState('');
  const [CategoryId, setCategoryId] = useState('');

  const [Quantity, setQuantity] = useState('');
  const [Price, setPrice] = useState('');

  const [CategoryLabel, setCategoryLabel] = useState('Categoria');

  const HandleSubmit = () => {
    onClickSubmit({
      product_name: ProductName,
      category: CategoryId,
      quantity: Quantity,
      price: Price,
    });
  };

  return (
    <Container>
      <Form>
        <FormInput
          placeholder="Nome do produto"
          maxLength={30}
          returnKeyType="next"
          style={{ width: '100%', marginBottom: 10 }}
          blurOnSubmit={false}
          value={ProductName}
          onChangeText={(text) => onChange_onlyText(text, setProductName)}
          ref={ProductNameRef}
          onSubmitEditing={() => PriceRef.getElement().focus()}
        />

        <Picker
          label="Selecione a categoria"
          value="Categoria"
          style={{ width: '100%', marginBottom: 10 }}
          text={CategoryLabel}
          data={Categorias}
          selectedValue={Category}
          onValueChange={(itemValue, itemIndex) => {
            setCategory(itemValue);
            setCategoryId(itemIndex);
            setCategoryLabel(itemValue);
          }}
          editable
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
            // eslint-disable-next-line no-return-assign
            ref={(ref) => (PriceRef = ref)}
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
            onSubmitEditing={HandleSubmit}
          />
        </MultiInput>

        <SubmitButton style={{ background: '#283593' }} onPress={HandleSubmit}>
          Próximo
        </SubmitButton>
      </Form>
    </Container>
  );
}

ProductForm.propTypes = {
  onClickSubmit: PropTypes.func.isRequired,
};
