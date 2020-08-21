import React, { useRef, useState, useEffect } from 'react';
import { Animated, Keyboard, Platform, StyleSheet } from 'react-native';
import BrazilianStates from '../../utils/BrazilStates.json';
import PickerAndroid from '../../components/Picker/picker.android';
import PickerIos from '../../components/Picker/picker.ios';
import InputMask from '../../components/TextInputMasked';


import { 
    Container, 
    Form,
    FormInput,
    SubmitButton,
    MultiInput
} from './styles';

function LocationPage(){
    const StateRef = useRef()
    const CityRef = useRef()
    const NeighborhoodRef = useRef()
    const AddressRef = useRef()
    const AdNumberRef = useRef()
    let PostcodeRef

    const typeOfPlatform = Platform.OS === 'ios'
    const typeOfkeyboardType = typeOfPlatform ? 'numbers-and-punctuation' : 'numeric'

    const IconSize = new Animated.Value(70) 
    const ViewSize = new Animated.Value(100)
    const TextSize = new Animated.Value(35)

    const [Country, setCountry] = useState('BR')
    const [State, setState] = useState('')
    const [City, setCity] = useState('')
    const [Neighborhood, setNeighborhood] = useState('')
    const [Address, setAddress] = useState('')
    const [AdNumber, setAdNumber] = useState('')
    const [Postcode, setPostcode] = useState('')

    const [modalVisible, setModalVisible] = useState(false)
    const [Label, setLabel] = useState('Estado')

    const handleSubmit = () => {
        Keyboard.dismiss()
    }

    const onChange_onlyText = (text, callback) => {
        if (/^[a-zA-Z]+$/.test(text) || text === "") {
            callback(text);
        }
    };

    const onChange_onlyNumber = (text, callback) => {
        if (/^[0-9]+$/.test(text) || text === ""){
            callback(text);
        }
    }

    useEffect(() => {
        const typeOfShow = typeOfPlatform ?  'keyboardWillShow' : 'keyboardDidShow'
        const typeOfHide = typeOfPlatform ? 'keyboardWillHide' : 'keyboardDidHide'

            Keyboard.addListener(typeOfShow, keyboardWillShow);
            Keyboard.addListener(typeOfHide, keyboardWillHide);

            return () => {
                 Keyboard.removeListener(typeOfShow, keyboardWillShow);
                 Keyboard.removeListener(typeOfHide, keyboardWillHide);
            }
    }, [])
    
    const keyboardWillShow = (event) => {
        Animated.timing(IconSize, {
          duration: event.duration,
          toValue: 40,
          useNativeDriver: false
        }).start();

        Animated.timing(ViewSize, {
            duration: event.duration,
            toValue: 50,
            useNativeDriver: false
          }).start();

        Animated.timing(TextSize, {
          duration: event.duration,
          toValue: 30,
          useNativeDriver: false
        }).start();
      };
    
    const keyboardWillHide = (event) => {
        Animated.timing(IconSize, {
          duration: event.duration,
          toValue: 70,
          useNativeDriver: false
        }).start();

        Animated.timing(ViewSize, {
            duration: event.duration,
            toValue: 100,
            useNativeDriver: false
          }).start();

        Animated.timing(TextSize, {
          duration: event.duration,
          toValue: 35,
          useNativeDriver: false
        }).start();
      };

    return(
        <Container>
            <Animated.View 
                style={[styles.TitleView, { height: ViewSize }]}
            >
                <Animated.Image 
                    source={require('../../assets/Geolocation_icon.png')}
                    style={[styles.IconView, { height: IconSize}]}
                    resizeMode="contain"
                />    

                <Animated.Text 
                    style={[styles.TextTitle, { fontSize: TextSize }]}
                >
                    Localização
                </Animated.Text>

            </Animated.View>
        
            <Form>  
                <MultiInput>
                    <FormInput
                         placeholder="País"
                         autoCorrect={true}
                         returnKeyType="next"
                         style={{ width: '18%'}}
                         blurOnSubmit={false}
                         value={Country}
                         onChangeText={setCountry}
                         onSubmitEditing={() => StateRef.current.focus()}
                         editable={false}
                     />                         

                    {typeOfPlatform ? (
                            <PickerIos 
                                text={Label}
                                onPressButton={() => setModalVisible(true)}
                                visible={modalVisible}
                                data={BrazilianStates}
                                selectedValue={State}
                                onValueChange={itemValue => {
                                    setState(itemValue)
                                    setLabel(itemValue)
                                }}
                                onPressSubmit={
                                    () => {
                                        CityRef.current.focus()
                                        setModalVisible(false)
                                    }
                                }
                            />
                    ) : (
                            <PickerAndroid 
                                data={BrazilianStates}
                                selectedValue={State}
                                onValueChange={itemValue => {
                                    setState(itemValue)
                                }}
                            />
                    )}
    
                     <FormInput
                         placeholder="Cidade"
                         maxLength={20}
                         returnKeyType="next"
                         style={{ width: '47%'}}
                         blurOnSubmit={false}
                         value={City}
                         onChangeText={text => onChange_onlyText(text, setCity)}
                         ref={CityRef}
                         onSubmitEditing={() => NeighborhoodRef.current.focus()}
                     />
                    
                </MultiInput>

                <MultiInput>
                    <FormInput
                        placeholder="Bairro"
                        maxLength={30}
                        returnKeyType="next"
                        style={{ width: '50%'}}
                        blurOnSubmit={false}
                        value={Neighborhood}
                        onChangeText={text => onChange_onlyText(text, setNeighborhood)}
                        ref={NeighborhoodRef}
                        onSubmitEditing={() => PostcodeRef.getElement().focus()}
                    />

                    <InputMask
                        placeholder="CEP"
                        returnKeyType="next"
                        style={{ width: '47%'}}
                        blurOnSubmit={false}
                        keyboardType={typeOfkeyboardType}
                        value={Postcode}
                        onChangeText={setPostcode}
                        ref={(ref) => PostcodeRef = ref}
                        onSubmitEditing={() => AddressRef.current.focus()}
                        type={'zip-code'}
                    />
                    
                </MultiInput>
            
                <MultiInput>
                
                   <FormInput
                        placeholder="Rua, avenida, estrada..."
                        maxLength={70}
                        returnKeyType="next"
                        style={{ width: '75%'}}
                        blurOnSubmit={false}
                        value={Address}
                        onChangeText={text => onChange_onlyText(text, setAddress)}
                        ref={AddressRef}
                        onSubmitEditing={() => AdNumberRef.current.focus()}
                   />

                   <FormInput
                        placeholder="Nº"
                        maxLength={5}
                        returnKeyType="send"
                        keyboardType={typeOfkeyboardType}
                        style={{ width: '22%' }}
                        blurOnSubmit={false}
                        value={AdNumber}
                        ref={AdNumberRef}
                        onChangeText={number => onChange_onlyNumber(number, setAdNumber)}
                        onSubmitEditing={handleSubmit}
                   />
                </MultiInput>

                <SubmitButton onPress={handleSubmit}>
                    Próximo
                </SubmitButton>

                <SubmitButton>
                    Pular
                </SubmitButton>
            </Form>
        </Container>
    )
}

const styles = StyleSheet.create({
    TitleView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextTitle: {
        fontWeight: 'bold',
        marginRight: 15
    },
    IconView: {
        width: 100,
        marginLeft: 0
    }
}) 

export default LocationPage