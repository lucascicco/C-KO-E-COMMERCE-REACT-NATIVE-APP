import React, { useState, useRef, useEffect } from 'react';
import { Platform, Alert } from 'react-native';
import PropTypes from 'prop-types';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import MaskedInput from '../TextInputMasked';
import Picker from '../Picker';
import ProductImage from '../ProductImage';

import Categorias from '~/utils/Categorias.js';

import { onChange_onlyText, onChange_onlyNumber } from '~/utils/RestrictInputs';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  MultiInput,
  DescriptionForm,
} from './styles';

export default function ProductForm({
  onClickSubmit,
  ViewHeight,
  ViewWidth,
  FontSize,
  productData,
}) {
  const typeOfPlatform = Platform.OS === 'ios';
  const typeOfkeyboardType = typeOfPlatform
    ? 'numbers-and-punctuation'
    : 'numeric';

  const ProductNameRef = useRef();
  const QuantityRef = useRef();
  let PriceRef;
  const DescriptionRef = useRef();

  const [ProductPicture, setProductImage] = useState(
    productData ? productData.url : []
  );
  const [ProductName, setProductName] = useState(
    productData ? productData.name : ''
  );
  const [Category, setCategory] = useState(
    productData ? productData.category : ''
  );
  const [Quantity, setQuantity] = useState(
    productData ? productData.quantity : ''
  );
  const [Description, setDescription] = useState(
    productData ? productData.description : ''
  );
  const [Price, setPrice] = useState(productData ? productData.price : '');
  const [CategoryLabel, setCategoryLabel] = useState(
    productData ? productData.category : 'Categoria'
  );

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        Alert.alert(
          'Acesso negado',
          'Precisamos da sua permissão para continuar.'
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
        quality: 1,
      });

      if (!result.cancelled) {
        setProductImage(result);
      }
    } catch (E) {
      console.log(E);
    }
  };

  const HandleSubmit = () => {
    onClickSubmit({
      image: ProductPicture,
      product_name: ProductName,
      category: Category,
      quantity: Quantity,
      description: Description,
      price: Price,
    });
  };

  useEffect(() => {
    getPermissionAsync();
  }, []);

  return (
    <Container>
      <ProductImage
        Height={ViewHeight}
        Width={ViewWidth}
        FontSize={FontSize}
        onPress={HandleChoosePhoto}
        uri={productData ? ProductPicture : ProductPicture.uri}
      />

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
          onValueChange={(itemValue) => {
            setCategory(itemValue);
            setCategoryLabel(itemValue);
          }}
          editable
        />

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
            onSubmitEditing={() => console.log('WORKING ON IT!')}
          />
        </MultiInput>

        <SubmitButton style={{ background: '#283593' }} onPress={HandleSubmit}>
          Próximo
        </SubmitButton>
      </Form>
    </Container>
  );
}
