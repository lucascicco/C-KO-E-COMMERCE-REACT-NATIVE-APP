import React, { useRef, useState, useEffect } from 'react';
import { Animated, Keyboard, Platform, StyleSheet } from 'react-native';
import PickerAndroid from '../../components/Picker/picker.android';
import PickerIos from '../../components/Picker/picker.ios';
import MaskedInput from '../../components/TextInputMasked';
import GenderJSON from '../../utils/Gender.json';

import { 
    Container, 
    Form,
    FormInput,
    SubmitButton,
    MultiInput
} from './styles';

function PersonalInformation(){
    let GenderRef 
    let PersonalIDRef 
    let CellphoneRef 
    let ProfessionRef 

    const typeOfPlatform = Platform.OS === 'ios'
    const typeOfkeyboardType = typeOfPlatform ? 'numbers-and-punctuation' : 'numeric'

    const IconSize = new Animated.Value(70) 
    const ViewSize = new Animated.Value(100)
    const TextSize = new Animated.Value(35)

    const [Birthday, setBirthday] = useState('')
    const [Gender, setGender] = useState('')
    const [PersonalID, setPersonalID] = useState('')
    const [Cellphone, setCellphone] = useState('')
    const [Profession, setProfession] = useState('')
    
    const [modalVisible, setModalVisible] = useState(false)
    const [LabelGender, setLabelGender] = useState('Sexo')

    const handleSubmit = () => {
        Keyboard.dismiss()
    }

    useEffect(() => {
        const typeOfShow = typeOfPlatform ?  'keyboardWillShow' : 'keyboardDidShow'
        const typeOfHide = typeOfPlatform ? 'keyboardWillHide' : 'keyboardDidHide'

            Keyboard.addListener(typeOfShow, keyboardWillShow)
            Keyboard.addListener(typeOfHide, keyboardWillHide)

            return () => {
                 Keyboard.removeListener(typeOfShow, keyboardWillShow)
                 Keyboard.removeListener(typeOfHide, keyboardWillHide)
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
                    {typeOfPlatform ? (
                        <PickerIos 
                            text={LabelGender}
                            onPressButton={() => setModalVisible(true)}
                            visible={modalVisible}
                            data={GenderJSON}
                            selectedValue={Gender}
                            onValueChange={itemValue => {
                                setGender(itemValue)
                                setLabelGender(itemValue)
                            }}
                            onPressSubmit={
                                () => {
                                    PersonalIDRef.getElement().focus()
                                    setModalVisible(false)
                                }
                            }
                        />
                    ) : (
                            <PickerAndroid 
                                data={GenderJSON}
                                selectedValue={Gender}
                                onValueChange={itemValue => {
                                    setGender(itemValue)
                                }}
                            />
                    )}       
                </MultiInput>

                <MultiInput>
                    <MaskedInput
                        type={'cpf'}
                        placeholder="CPF"
                        keyboardType={typeOfkeyboardType}
                        returnKeyType="next"
                        style={{ width: '50%'}}
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
                        blurOnSubmit={false}
                        value={Cellphone}
                        onChangeText={setCellphone}
                        ref={(ref) => CellphoneRef = ref}
                        onSubmitEditing={() => ProfessionRef.getElement().focus()}
                    />
                </MultiInput>
            
                <MultiInput>
                   <FormInput
                        placeholder="Endereço"
                        returnKeyType="send"
                        style={{ width: '100%'}}
                        blurOnSubmit={false}
                        value={Profession}
                        onChangeText={setProfession}
                        ref={(ref) => ProfessionRef = ref}
                        onSubmitEditing={() => console.log('Done')}
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

export default PersonalInformation