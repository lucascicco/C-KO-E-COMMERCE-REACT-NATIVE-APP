import React, { useState, useEffect } from 'react';
import Modal from 'react-native-modal';
import data from '../../utils/testing_data';
import FlatlistSells from '../../components/MyProfilePagesComponents/SellFlatlist';
import ModalInfo from '../../components/MyProfilePagesComponents/ModalContact';

import { 
    Container
} from './styles';

function MySellsPage(){
    const [visible, setVisibility] = useState(false)

    return(
        <Container>
            <FlatlistSells 
                data={data}
                onPress={() => setVisibility(!visible)}
            />
            
            <Modal
                isVisible={visible}
                animationIn="zoomIn"
                animationOut="zoomOut"
                animationInTiming={500}
                animationOutTiming={500}
                avoidKeyboard={false}
                coverScreen={true}
                onBackdropPress={() => setVisibility(false)}
            >   
                <ModalInfo 
                
                />
            </Modal>
            
        </Container>
    )
}

export default MySellsPage;