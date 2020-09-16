import React, { useRef, useState } from 'react';
import { Platform } from 'react-native';
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
    WarningText
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
    const [enable, setEnable] =  useState(true)

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

        if(itemValue === 3){
            setHeight(0)
            setDiameter(0)
            setEnable(false)
        }else{
            setEnable(true)
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
                         maxLength={5}
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
                        maxLength={5}
                        returnKeyType="next"
                        style={{ width: '28%'}}
                        blurOnSubmit={false}
                        value={height}
                        onChangeText={text => onChange_onlyNumber(text, setHeight)}
                        textStyle={{fontFamily: height ? null : 'raleway'}}
                        ref={HeightRef}
                        onSubmitEditing={() => WidthRef.current.focus()}
                        editable={enable}
                    />
                </MultiInput>
                            
                <MultiInput>
                            
                    <FormInput
                        placeholder="Largura"
                        keyboardType={typeOfkeyboardType}
                        maxLength={5}
                        returnKeyType="next"
                        style={{ width: '30%'}}
                        blurOnSubmit={false}
                        value={width}
                        onChangeText={text => onChange_onlyNumber(text, setWidth)}
                        textStyle={{fontFamily: width ? null : 'raleway'}}
                        ref={WidthRef}
                        onSubmitEditing={() => LengthRef.current.focus()}
                    />

                    <FormInput
                        placeholder="Comprimento"
                        keyboardType={typeOfkeyboardType}
                        maxLength={5}
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
                        maxLength={5}
                        returnKeyType="next"
                        style={{ width: '30%'}}
                        blurOnSubmit={false}
                        value={diameter}
                        onChangeText={text => onChange_onlyNumber(text, setDiameter)}
                        textStyle={{fontFamily: diameter ? null : 'raleway'}}
                        ref={DiameterRef}
                        editable={enable}
                    />

                </MultiInput>
                            
                <WarningView>
                    <WarningText>
                        Todas as medidas devem ser feitas incluindo a embalagem.
                        Peso é dado em kilogramas. Já o restante é dado em centímetros.
                        Se o formato é envelope, o peso máximo será de um kilograma.
                        Exemplo: Peso = 60,0 (KG) / Altura = 170 (CM).
                    </WarningText>
                </WarningView>

                <SubmitBottom onPress={handleSubmit} style={{ background: '#283593'}}>
                        Salvar produto
                </SubmitBottom>
            </Form>
        </Container>
    )
}

