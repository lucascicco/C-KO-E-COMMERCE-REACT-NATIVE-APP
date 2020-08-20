import React from 'react';
import { Picker, Modal, View } from 'react-native';
import { Container } from './styles';
import ButtonType2 from '../../components/ButtonType2';
import Button from '../ButtonType1';

function PickerCustom({data, visible, onPressSubmit, onPressButton, text, ...rest}){
    return(
        <View style={{ width:'27%', marginRight: 10}}>
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

        </View>
    )
}

export default PickerCustom