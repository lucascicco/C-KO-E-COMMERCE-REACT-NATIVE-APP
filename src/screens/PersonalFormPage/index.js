import React, { useRef, useState, useEffect } from 'react';
import { Animated, Keyboard, Platform, StyleSheet } from 'react-native';
import MaskedInput from '../../components/TextInputMasked';
import GenderData from '../../utils/Gender.js';
import Picker from '../../components/Picker';
import ProfessionData from '../../utils/Profession.js';
import DatePicker from '../../components/DataPicker';
import { ImageResizingEventTwo } from '../../utils/KeyboardsEvents';
import Background from '../../components/Background2'

import { 
    Container, 
    Form,
    SubmitButton,
    MultiInput
} from './styles';

function PersonalInformation(){
    let PersonalIDRef 
    let CellphoneRef 
    const ProfessionRef = useRef();

    const typeOfPlatform = Platform.OS === 'ios'
    const typeOfkeyboardType = typeOfPlatform ? 'numbers-and-punctuation' : 'numeric'

    const IconSize = new Animated.Value(70)
    const ViewSize = new Animated.Value(100)
    const TextSize = new Animated.Value(35)

    const [Birthday, setBirthday] = useState(new Date())
    const [Gender, setGender] = useState('')
    const [PersonalID, setPersonalID] = useState('')
    const [Cellphone, setCellphone] = useState('')  
    const [Profession, setProfession] = useState('')
    
    const [LabelGender, setLabelGender] = useState('Sexo')
    const [LabelProfession, setLabelProfession] = useState('Profissão')

    const handleSubmit = () => {
        Keyboard.dismiss()
    }

    useEffect(() => {
        const typeOfShow = typeOfPlatform ?  'keyboardWillShow' : 'keyboardDidShow'
        const typeOfHide = typeOfPlatform ? 'keyboardWillHide' : 'keyboardDidHide'

            Keyboard.addListener(typeOfShow, ImageResizingEventTwo('show', IconSize, ViewSize, TextSize));
            Keyboard.addListener(typeOfHide, ImageResizingEventTwo('hide', IconSize, ViewSize, TextSize));

            return () => {
                 Keyboard.removeListener(typeOfShow, ImageResizingEventTwo('show', IconSize, ViewSize, TextSize));
                 Keyboard.removeListener(typeOfHide, ImageResizingEventTwo('hide', IconSize, ViewSize, TextSize));
            }
    }, [])
    
    return(
        <Background>
            <Container>
                <Animated.View 
                    style={[styles.TitleView, { height: ViewSize }]}
                >
                    <Animated.Image 
                        source={require('../../assets/Information_Icon.png')}
                        style={[styles.IconView, { height: IconSize}]}
                        resizeMode="contain"
                    />    
            
                    <Animated.Text 
                        style={[styles.TextTitle, { fontSize: TextSize }]}
                    >
                        Informações
                    </Animated.Text>
            
                </Animated.View>
            
                <Form>  
                    <MultiInput>
            
                        <DatePicker 
                            date={Birthday}
                            onChange={(event, date) => setBirthday(date)}
                        />
            
     
                        <Picker 
                            label="Selecione o gênero"
                            value="Gênero"
                            style={{ width: '40%'}}
                            text={LabelGender}
                            data={GenderData}
                            selectedValue={Gender}
                            onValueChange={itemValue => {
                                setGender(itemValue)
                                setLabelGender(itemValue)
                            }}
                        />
 
                     
                    </MultiInput>
                                
                    <MultiInput>
                        <MaskedInput
                            type={'cpf'}
                            placeholder="CPF"
                            keyboardType={typeOfkeyboardType}
                            returnKeyType="next"
                            style={{ width: '50%', marginRight: 10}}
                            maskedStyle={{fontFamily: PersonalID ? null : 'raleway'}}
                            blurOnSubmit={false}
                            value={PersonalID}
                            onChangeText={setPersonalID}
                            ref={(ref) => PersonalIDRef = ref}
                            onSubmitEditing={() => CellphoneRef.getElement().focus()}
                        />
                                
                        <MaskedInput
                            type={'cel-phone'}
                            placeholder="Celular"
                            keyboardType={typeOfkeyboardType}
                            returnKeyType="next"
                            style={{ width: '47%'}}
                            maskedStyle={{fontFamily: Cellphone ? null : 'raleway'}}
                            blurOnSubmit={false}
                            value={Cellphone}
                            onChangeText={setCellphone}
                            ref={(ref) => CellphoneRef = ref}
                        />
                    </MultiInput>
                                
                    <MultiInput>
                
                    <Picker 
                        label="Selecione a profissão"
                        value="Profissão"
                        style={{ width: '100%'}}
                        text={LabelProfession}
                        data={ProfessionData}
                        selectedValue={Profession}
                        onValueChange={itemValue => {
                            setProfession(itemValue)
                            setLabelProfession(itemValue)
                        }}
                    />
                                   
                    </MultiInput>
                            
                    <SubmitButton style={{ background: '#283593'}} onPress={handleSubmit}>
                        Próximo
                    </SubmitButton>
                </Form>
            </Container>
        </Background>
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
        marginRight: 15,
        fontFamily: 'playfair-bold'
    },
    IconView: {
        width: 100,
        marginLeft: 0
    }
}) 

export default PersonalInformation