import React, {useState, useRef, useEffect } from 'react';
import { Platform, Alert } from 'react-native'

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import MaskedInput from '../TextInputMasked';
import Picker from '../Picker';
import ProductImage from '../ProductImage';

import Categorias from '../../utils/Categorias.js';
import { onChange_onlyText, onChange_onlyNumber } from '../../utils/RestrictInputs';

import { 
    Container, 
    Form,
    FormInput,
    SubmitButton,
    MultiInput,
    DescriptionForm
} from './styles';

function ProductForm({ onClickSubmit,  ViewHeight, ViewWidth, FontSize }){
    const typeOfPlatform = Platform.OS === 'ios'
    const typeOfkeyboardType = typeOfPlatform ? 'numbers-and-punctuation' : 'numeric'

    const ProductNameRef = useRef();
    const QuantityRef = useRef();
    let PriceRef;
    const DescriptionRef = useRef();

    const [ProductPicture, setProductImage] = useState('')
    const [ProductName, setProductName] = useState('')
    const [Category, setCategory] = useState('')
    const [Quantity, setQuantity] = useState('')
    const [Description, setDescription] = useState('')
    const [Price, setPrice] = useState('')
    const [CategoryLabel, setCategoryLabel] = useState('Categoria')
    
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
                'Precisamos da sua permissão para continuar.'
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

    const HandleSubmit = () => {
        onClickSubmit({
            uri: ProductPicture,
            productName: ProductName,
            category: Category,
            quantity: Quantity,
            description: Description,
            price: Price
        })
    }

    return(
            <Container>
                   <ProductImage 
                       Height={ViewHeight}
                       Width={ViewWidth}
                       FontSize={FontSize}
                       onPress={HandleChoosePhoto}
                       uri={ProductPicture}
                   />

                   <Form>
                       <FormInput
                           placeholder="Nome do produto"
                           maxLength={30}
                           returnKeyType="next"
                           style={{ width: '100%', marginBottom: 10}}
                           blurOnSubmit={false}
                           value={ProductName}
                           onChangeText={text => onChange_onlyText(text, setProductName)}
                           ref={ProductNameRef}
                           onSubmitEditing={() => PriceRef.getElement().focus()}
                       />

                        <Picker 
                            label="Selecione a categoria"
                            value="Categoria"
                            style={{ width: '100%', marginBottom: 10}}
                            text={CategoryLabel}
                            data={Categorias}
                            selectedValue={Category}
                                onValueChange={itemValue => {
                                    setCategory(itemValue)
                                    setCategoryLabel(itemValue)
                                }}
                        />
                            

                            
                       <DescriptionForm
                            multiline={true}
                            autoCorrect={true}
                            numberOfLines={4}
                            value={Description}
                            onChangeText={description => setDescription(description)}
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
                                    fontFamily: Price ? null : 'raleway'
                                }}
                               blurOnSubmit={false}
                               value={Price}
                               onChangeText={number => setPrice(number)}
                               ref={ref => PriceRef = ref}
                               onSubmitEditing={() => QuantityRef.current.focus()}
                           />

                           <FormInput
                               placeholder="Quantidade"
                               maxLength={5}
                               keyboardType={typeOfkeyboardType}
                               returnKeyType="next"
                               style={{ width: '50%'}}
                               blurOnSubmit={false}
                               value={Quantity}
                               onChangeText={number => onChange_onlyNumber(number, setQuantity)}
                               ref={QuantityRef}
                               onSubmitEditing={() => console.log('WORKING ON IT!')}
                           />
                       </MultiInput>
                            
               
                       <SubmitButton style={{ background: '#283593'}} onPress={HandleSubmit}>
                            Criar produto
                        </SubmitButton>
                   </Form>
            </Container>    
    )
}


export default ProductForm;