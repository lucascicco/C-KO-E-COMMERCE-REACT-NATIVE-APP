/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';
import { Platform,  Animated, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import MaskedInput from '../TextInputMasked';
// eslint-disable-next-line import/no-unresolved
import PickerCategory from '~/components/PickerCategory';

import { onChange_onlyText, onChange_onlyNumber } from '~/utils/RestrictInputs';

import { Form, FormInput, SubmitButton, MultiInput } from './styles';

export default function ProductForm({ onClickSubmit, positionY }) {
  const typeOfPlatform = Platform.OS === 'ios';
  const typeOfkeyboardType = typeOfPlatform
    ? 'numbers-and-punctuation'
    : 'numeric';

  const ProductNameRef = useRef();
  const QuantityRef = useRef();
  let moneyField;

  const [ProductName, setProductName] = useState('');
  const [Category, setCategory] = useState('');
  const [CategoryId, setCategoryId] = useState('');

  const [Quantity, setQuantity] = useState('');
  const [Price, setPrice] = useState('');

  const [CategoryLabel, setCategoryLabel] = useState('Categorias');

  const HandleSubmit = () => {
    onClickSubmit({
      product_name: ProductName,
      category: CategoryId,
      quantity: Quantity,
      price: moneyField.getRawValue(),
    });
  };

  return (
    <Animated.View style={[styles.View, {
      transform: [{
        translateY: positionY
      }]
    }]}>
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
        />

        <PickerCategory 
          selectedValue={Category}
          text={CategoryLabel}
          onValueChange={(item, itemIndex) => {
            setCategoryLabel(item)
            setCategory(item)
            setCategoryId(itemIndex)
          }}
          itemStyle={{
            fontFamily: 'raleway',
            fontSize: 25,
          }}
          mode="dropdown"
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
            ref={(ref) => moneyField = ref}
            onChangeText={(number) => setPrice(number)}
            // eslint-disable-next-line no-return-assign
            onSubmitEditing={() => QuantityRef.current.focus()}
          />

          <FormInput
            placeholder="Quantidade"
            maxLength={3}
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
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10
  }
});


ProductForm.propTypes = {
  onClickSubmit: PropTypes.func.isRequired,
  positionY: PropTypes.shape({
    positionY: PropTypes.number
  }).isRequired
};
