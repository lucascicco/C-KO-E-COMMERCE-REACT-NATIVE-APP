import React, { useRef, useState } from 'react';
import { Platform, Linking } from 'react-native';
import Picker from '../../components/Picker';
import FormatosCorreios from '../../utils/FormatosCorreios';
import { onChange_numberComma, onChange_onlyNumber } from '../../utils/RestrictInputs';

import { 
    Container, 
    Form,
    FormInput,
    MultiInput,
    SubmitBottom,
    WarningView,
    WarningText,
    InfoButton,
    InfoText
} from './styles';

export default function ProductsFeature({ onClickSubmit }){
    const HeightRef = useRef()
    const WidthRef = useRef()
    const DiameterRef = useRef()
    const LengthRef= useRef()

    const typeOfPlatform = Platform.OS === 'ios'
    const typeOfkeyboardType = typeOfPlatform ? 'numbers-and-punctuation' : 'numeric'

    const [format, setFormat] = useState('')
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')
    const [length, setLenght] = useState('')
    const [weight, setWeight] = useState('')
    const [diameter, setDiameter] = useState('')
    
    const [Label, setLabel] = useState('Formato')

    const [enableHeight, setEnableHeight] =  useState(true)
    const [enableWidth, setEnableWidth] =  useState(true)
    const [enableDiameter, setEnableDiameter] =  useState(true)

    const handleSubmit = () => {
        onClickSubmit({
            format,
            width,
            height,
            length,
            weight,
            diameter
        })
    }

    const handlePickingFormat = (itemValue) => {
        setFormat(itemValue)

        switch(itemValue){
            case 3: 
                setEnableHeight(false)
                setEnableDiameter(false)
                setEnableWidth(true)
                setDiameter(0)
                setHeight(0)
            case 2: 
                setEnableHeight(false)
                setEnableWidth(false)
                setEnableDiameter(true)
                setHeight(0)
                setWidth(0)
            case 1: 
                setEnableHeight(true)
                setEnableWidth(true)
                setEnableDiameter(false)
                setDiameter(0)
            default: 
                setEnableHeight(true)
                setEnableWidth(true)
                setEnableDiameter(true)
        }
    }

    return(
        <Container>
            <Form>  
                <MultiInput>                   
                     <Picker 
                        label="Selecione o formato"
                        value="Formato"
                        text={Label}
                        data={FormatosCorreios}
                        selectedValue={format}
                        onValueChange={itemValue => {
                            handlePickingFormat(itemValue)
                            setLabel(itemValue.toString())
                            console.log(itemValue)
                        }}
                        style={{ width:'35%'}}
                    />
                            
                     <FormInput
                         placeholder="Peso"
                         keyboardType={typeOfkeyboardType}
                         maxLength={4}
                         returnKeyType="next"
                         style={{ width: '27%'}}
                         blurOnSubmit={false}
                         value={weight}
                         onChangeText={text => onChange_numberComma(text, setWeight)}
                         onSubmitEditing={() => HeightRef.current.focus()}
                         textStyle={{fontFamily: weight ? null : 'raleway'}}
                     />
                            
                     <FormInput
                        placeholder="Altura"
                        keyboardType={typeOfkeyboardType}
                        maxLength={3}
                        returnKeyType="next"
                        style={{ width: '28%'}}
                        blurOnSubmit={false}
                        value={height}
                        onChangeText={text => onChange_onlyNumber(text, setHeight)}
                        textStyle={{fontFamily: height ? null : 'raleway'}}
                        ref={HeightRef}
                        onSubmitEditing={() => WidthRef.current.focus()}
                        editable={enableHeight}
                    />
                </MultiInput>
                            
                <MultiInput>
                            
                    <FormInput
                        placeholder="Largura"
                        keyboardType={typeOfkeyboardType}
                        maxLength={3}
                        returnKeyType="next"
                        style={{ width: '30%'}}
                        blurOnSubmit={false}
                        value={width}
                        onChangeText={text => onChange_onlyNumber(text, setWidth)}
                        textStyle={{fontFamily: width ? null : 'raleway'}}
                        ref={WidthRef}
                        onSubmitEditing={() => LengthRef.current.focus()}
                        editable={enableWidth}
                    />

                    <FormInput
                        placeholder="Comprimento"
                        keyboardType={typeOfkeyboardType}
                        maxLength={3}
                        returnKeyType="next"
                        style={{ width: '30%'}}
                        blurOnSubmit={false}
                        value={length}
                        onChangeText={text => onChange_onlyNumber(text, setLenght)}
                        textStyle={{fontFamily: length ? null : 'raleway'}}
                        ref={LengthRef}
                        onSubmitEditing={() => DiameterRef.current.focus()}
                    />
                            
                    <FormInput
                        placeholder="Diâmetro"
                        keyboardType={typeOfkeyboardType}
                        maxLength={3}
                        returnKeyType="next"
                        style={{ width: '30%'}}
                        blurOnSubmit={false}
                        value={diameter}
                        onChangeText={text => onChange_onlyNumber(text, setDiameter)}
                        textStyle={{fontFamily: diameter ? null : 'raleway'}}
                        ref={DiameterRef}
                        editable={enableDiameter}
                    />

                </MultiInput>
                            
                <WarningView>
                    <WarningText>
                        Todas as medidas devem ser feitas incluindo a embalagem.
                        Valores de dimensões são dados em CM. Já, o peso é dado KG.
                        <InfoButton onPress={() => Linking.openURL('https://www.correios.com.br/enviar-e-receber/precisa-de-ajuda/limites-de-dimensoes-e-peso')}>
                            <InfoText>
                                Ver medidas
                            </InfoText>
                        </InfoButton>
                    </WarningText>
                </WarningView>

                <SubmitBottom onPress={handleSubmit} style={{ background: '#283593'}}>
                        Salvar produto
                </SubmitBottom>
            </Form>
        </Container>
    )
}

