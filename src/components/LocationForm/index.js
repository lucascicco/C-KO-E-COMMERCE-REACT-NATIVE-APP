import React, { useRef, useState, useEffect } from 'react';
import { Platform } from 'react-native';
import InputMask from '../TextInputMasked';
import Picker from '../../components/Picker';
import BrazilianStates from '../../utils/BrazilStates.js';
import { onChange_onlyText, onChange_onlyNumber } from '../../utils/RestrictInputs';

import { 
    Container, 
    Form,
    FormInput,
    MultiInput,
    SubmitBottom
} from './styles';

function LocationPage({ onClickSubmit , xz}){
    const StateRef = useRef()
    const CityRef = useRef()
    const NeighborhoodRef = useRef()
    const AddressRef = useRef()
    const AdNumberRef = useRef()
    let PostcodeRef

    const typeOfPlatform = Platform.OS === 'ios'
    const typeOfkeyboardType = typeOfPlatform ? 'numbers-and-punctuation' : 'numeric'

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
        onClickSubmit({
            country: Country,
            state: State,
            city: City,
            neighborhood: Neighborhood,
            address: Address,
            adNumber: AdNumber,
            postcode: Postcode 
        })
    }

    return(
        <Container>
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

                     <Picker 
                        label="Selecione o estado"
                        value="Estado"
                        text={Label}
                        data={BrazilianStates}
                        selectedValue={State}
                        onValueChange={itemValue => {
                            setState(itemValue)
                            setLabel(itemValue)
                        }}
                    />
                            
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

                <SubmitBottom onPress={handleSubmit}>
                    Alterar
                </SubmitBottom>
            </Form>
        </Container>
    )
}

export default LocationPage
