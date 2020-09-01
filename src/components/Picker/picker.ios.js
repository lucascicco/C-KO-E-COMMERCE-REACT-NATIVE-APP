import React , {useState} from 'react';
import { Picker } from 'react-native';
import Modal from 'react-native-modal';
import { MainContainer, Container } from './styles';
import ButtonType2 from '../../components/ButtonType2';
import Button from '../ButtonType1';

function PickerCustom({style, styleButton, label, value, data, onPressSubmit, text, ...rest}){
    const [modalVisible, setModalVisible] = useState(false)

    return(
        <MainContainer style={style}>
            <ButtonType2
                onPress={() => setModalVisible(true)}
                text={text}
                icon="select-arrows"
                style={styleButton}
            />

            <Modal
                isVisible={modalVisible}
                animationIn="zoomIn"
                animationOut="zoomOut"
                animationInTiming={500}
                animationOutTiming={500}
                avoidKeyboard={false}
                coverScreen={true}
            >
                 <Container>     
                     <Picker
                        {...rest}
                        itemStyle={{
                            fontFamily: 'raleway',
                            color: '#FFF',
                            fontSize: 25,
                            height: 300
                        }}
                         >  
                         <Picker.Item 
                            label={label}
                            value={value}
                        />
                        
                         {
                             data.map((item, index) => {
                                 return <Picker.Item 
                                     label={item.nome}  
                                     value={item.sigla || item.nome}
                                     key={item.sigla || index + 1}
                                 />
                             })
                         }
                     </Picker>  
 
                     <Button style={{ background: '#283593'}} onPress={() => {
                            if(onPressSubmit) onPressSubmit()
                            setModalVisible(false)
                     }}>
                         Selecionar
                     </Button>
                     
                 </Container>    
            </Modal>

        </MainContainer>
    )
}

export default PickerCustom