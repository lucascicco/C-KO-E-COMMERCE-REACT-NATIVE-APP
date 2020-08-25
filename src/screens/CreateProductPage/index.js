import React, {useState, useRef, useEffect } from 'react';
import { Platform } from 'react-native';
import { onChange_onlyText, onChange_onlyNumber } from '../../utils/RestrictInputs';
import PickerAndroid from '../../components/Picker/picker.android';
import PickerIos from '../../components/Picker/picker.ios';
import MaskedInput from '../../components/TextInputMasked';
import ProductImage from '../../components/ProductImage';
import CategoriesJSON from '../../utils/Categorias.json'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { 
    Container, 
    Form,
    FormInput,
    SubmitButton,
    MultiInput
} from './styles';

function CreateProductPage(){
    const ProductNameRef = useRef();
    const QuantityRef = useRef();
    let PriceRef;
    const DescriptionRef = useRef();

    const typeOfPlatform = Platform.OS === 'ios'
    const typeOfkeyboardType = typeOfPlatform ? 'numbers-and-punctuation' : 'numeric'

    const [ProductPicture, setProductImage] = useState()
    const [ProductName, setProductName] = useState()
    const [Category, setCategory] = useState()
    const [Quantity, setQuantity] = useState()
    const [Description, setDescription] = useState()
    const [Price, setPrice] = useState()
    const [CategoryLabel, setCategoryLabel] = useState('Categoria do produto')
    
    useEffect(() => {
        getPermissionAsync();
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


    return(
        <Container>
            <ProductImage 
                style={{ borderWidth: 5, borderColor: 'red'}}
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

                {typeOfPlatform ? (
                    <PickerIos 
                        label="Selecione a categoria"
                        value="Categoria"
                        style={{ width: '100%', marginBottom: 10}}
                        text={CategoryLabel}
                        data={CategoriesJSON}
                        selectedValue={Category}
                            onValueChange={itemValue => {
                                setCategory(itemValue)
                                setCategoryLabel(itemValue)
                            }}
                        onPressSubmit={() => PriceRef.getElement().focus()}
                    />
                ) : ( 
                    <PickerAndroid 

                    />
                )}
                
                <MultiInput>
                    <MaskedInput
                        type="money"
                        placeholder="Preço"
                        returnKeyType="next"
                        style={{ width: '47%', marginRight: 10}}
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
                        onSubmitEditing={() => DescriptionRef.current.focus()}
                    />
                </MultiInput>


                <FormInput
                    multiline={true}
                    numberOfLines={3}
                    autoCorrect={true}
                    value={Description}
                    onChangeText={description => setDescription(description)}
                    placeholder="Descrição"
                    maxLength={350}
                    ref={DescriptionRef}
                    style={{
                        width: '100%',
                        fontSize: 20,
                        height: 100,
                        padding: 5,
                        borderRadius: 4
                    }}
                    returnKeyType="send"
                    onSubmitEditing={() => console.log('WORKING ON IT!')}
                />
                
                <SubmitButton onPress={() => console.log('WORKING ON IT!')}>
                    Criar produto
                </SubmitButton>
            </Form>
        </Container>
    )
}


export default CreateProductPage