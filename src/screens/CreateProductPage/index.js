import React, {useState, useRef, useEffect } from 'react';
import { Animated, Keyboard, Platform, TouchableWithoutFeedback  } from 'react-native';
import { onChange_onlyText, onChange_onlyNumber } from '../../utils/RestrictInputs';
import Picker from '../../components/Picker';
import MaskedInput from '../../components/TextInputMasked';
import ProductImage from '../../components/ProductImage';
import Categorias from '../../utils/Categorias.js'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { ImageResizingEventThree } from '../../utils/KeyboardsEvents';


import { 
    Container, 
    Form,
    FormInput,
    SubmitButton,
    MultiInput,
    DescriptionForm
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
    const [CategoryLabel, setCategoryLabel] = useState('Categoria')
    
    const ViewHeight = new Animated.Value(175);
    const ViewWidth = new Animated.Value(210);
    const FontSize = new Animated.Value(22);
    
    useEffect(() => {
        getPermissionAsync()

        const typeOfShow = typeOfPlatform ?  'keyboardWillShow' : 'keyboardDidShow'
        const typeOfHide = typeOfPlatform ? 'keyboardWillHide' : 'keyboardDidHide'

            Keyboard.addListener(typeOfShow, ImageResizingEventThree('show', ViewHeight, ViewWidth, FontSize));
            Keyboard.addListener(typeOfHide, ImageResizingEventThree('hide', ViewHeight, ViewWidth, FontSize));

            return () => {
                 Keyboard.removeListener(typeOfShow, ImageResizingEventThree('show', ViewHeight, ViewWidth, FontSize));
                 Keyboard.removeListener(typeOfHide, ImageResizingEventThree('hide', ViewHeight, ViewWidth, FontSize));
            }
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                       
                   <SubmitButton onPress={() => console.log('WORKING ON IT!')}>
                       Criar produto
                   </SubmitButton>
               </Form>
            </Container>    
        </TouchableWithoutFeedback>
    )
}


export default CreateProductPage