import React, { useRef, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { Picker } from 'react-native';

import { 
    Container, 
    Form,
    FormInput,
    SubmitButton,
    TitleView,
    TextTitle,
    MultiInput
} from './styles';

function LocationPage(){
    const StateRef = useRef();
    const CityRef = useRef();
    const NeighborhoodRef = useRef();
    const AddressRef = useRef();
    const AdNumberRef = useRef();
    const PostcodeRef = useRef();

    
    const [Country, setCountry] = useState('Brasil')
    const [State, setState] = useState('')
    const [City, setCity] = useState('')
    const [Neighborhood, setNeighborhood] = useState('')
    const [Address, setAddress] = useState('')
    const [AdNumber, setAdNumber] = useState('')
    const [Postcode, setPostcode] = useState('')
    

    const handleSubmit = () => {

    }
    
    return(
        <Container>
            <TitleView>
                <Entypo 
                    name="location"
                    size={70}
                    color="black"
                />
                <TextTitle>
                    Localização
                </TextTitle>
            </TitleView>
        
            <Form>  
                <MultiInput>
                    <FormInput
                         placeholder="País"
                         autoCorrect={true}
                         returnKeyType="next"
                         style={{ width: '30%' }}
                         blurOnSubmit={false}
                         value={Country}
                         onChangeText={setCountry}
                         onSubmitEditing={() => StateRef.current.focus()}
                     />     
                     <FormInput
                         placeholder="SG"
                         returnKeyType="next"
                         style={{ width: '17%'}}
                         blurOnSubmit={false}
                         value={State}
                         onChangeText={setState}
                         ref={StateRef}
                         onSubmitEditing={() => CityRef.current.focus()}
                     />    
                     <FormInput
                         placeholder="Cidade"
                         returnKeyType="next"
                         style={{ width: '47%'}}
                         blurOnSubmit={false}
                         value={City}
                         onChangeText={setCity}
                         ref={CityRef}
                         onSubmitEditing={() => NeighborhoodRef.current.focus()}
                     />
                </MultiInput>

                <MultiInput>
                    <FormInput
                        placeholder="Bairro"
                        returnKeyType="next"
                        style={{ width: '50%'}}
                        blurOnSubmit={false}
                        value={Neighborhood}
                        onChangeText={setNeighborhood}
                        ref={NeighborhoodRef}
                        onSubmitEditing={() => AddressRef.current.focus()}
                    />
                    <FormInput
                        placeholder="CEP"
                        returnKeyType="next"
                        style={{ width: '47%'}}
                        blurOnSubmit={false}
                        value={Address}
                        onChangeText={setAddress}
                        ref={AddressRef}
                        onSubmitEditing={() => AdNumberRef.current.focus()}
                    />
                </MultiInput>
            
                <MultiInput>
                   <FormInput
                        placeholder="Endereço"
                        returnKeyType="next"
                        style={{ width: '75%'}}
                        blurOnSubmit={false}
                        value={AdNumber}
                        onChangeText={setAdNumber}
                        ref={AdNumberRef}
                        onSubmitEditing={() => PostcodeRef.current.focus()}
                   />
                   <FormInput
                        placeholder="Nº"
                        returnKeyType="next"
                        style={{ width: '22%' }}
                        blurOnSubmit={false}
                        value={Postcode}
                        ref={PostcodeRef}
                        onChangeText={setPostcode}
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

export default LocationPage