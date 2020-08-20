import React from 'react';
import { Picker, Modal, View } from 'react-native';
import { MainContainer, Container } from './styles';
import ButtonType2 from '../../components/ButtonType2';
import Button from '../ButtonType1';

function PickerCustom({data, visible, onPressSubmit, onPressButton, text, ...rest}){
    return(
        <MainContainer>
            <ButtonType2 
                onPress={onPressButton}
                text={text}
                icon="select-arrows"
            />

            <Modal
                animationType="slide"
                visible={visible}
            >
                 <Container>     
                     <Picker
                     {...rest}
                         >  
                         <Picker.Item 
                            label="Selecione o Estado"
                            value="Estado"
                        />
                        
                         {
                             data.map((item) => {
                                 return <Picker.Item 
                                     label={item.nome} 
                                     value={item.sigla}
                                     key={item.sigla}
                                 />
                             })
                         }
                     </Picker>  
 
                     <Button onPress={onPressSubmit}>
                         Selecionar
                     </Button>
                 </Container>    
            </Modal>

        </MainContainer>
    )
}

export default PickerCustom