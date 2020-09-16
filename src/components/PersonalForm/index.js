import React, {useState }from 'react';
import { Platform } from 'react-native';
import GenderData from '../../utils/Gender.js';
import ProfessionData from '../../utils/Profession.js';
import DatePicker from '../DataPicker';
import MaskedInput from '../TextInputMasked';
import Picker from '../Picker';

import {
    Form,
    MultiInput,
    SubmitButton
} from './styles';

function PersonalForm({ onClickSubmit , personal}){
    let PersonalIDRef 
    let CellphoneRef 

    const typeOfPlatform = Platform.OS === 'ios'
    const typeOfkeyboardType = typeOfPlatform ? 'numbers-and-punctuation' : 'numeric'

    const [Birthday, setBirthday] = useState(personal ? personal.birthay : new Date())
    const [Gender, setGender] = useState(personal ? personal.gender : '')
    const [PersonalID, setPersonalID] = useState(personal ? personal.identification : '')
    const [Cellphone, setCellphone] = useState(personal ? personal.cellphone : '')  
    const [Profession, setProfession] = useState(personal ? personal.profession : '')
    
    const [LabelGender, setLabelGender] = useState('Sexo')
    const [LabelProfession, setLabelProfession] = useState('Profissão')

    const handleSubmit = () => {
        onClickSubmit({
            birthday: Birthday,
            gender: Gender,
            cellphone: Cellphone,
            profession: Profession,
            identification: PersonalID
        })
    }

    return(
        <Form>  
            <MultiInput>
                <DatePicker
                    date={Birthday}
                    onChange={(event, date) => {
                            if(date === undefined) setBirthday(new Date())
                            setBirthday(date)
                        }
                    }
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
                Salvar
            </SubmitButton>
        </Form>
    )
}

export default PersonalForm