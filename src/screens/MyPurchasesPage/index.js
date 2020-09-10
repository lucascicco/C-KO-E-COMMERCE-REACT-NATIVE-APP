import React, { useState } from 'react';
import Modal from 'react-native-modal';
import data from '../../utils/testing_data';
import FlatlistProducts from '../../components/MyProfilePagesComponents/PurchasesFlatList';
import ModalInfo from '../../components/MyProfilePagesComponents/ModalContact';
import TitleView from '../../components/MyProfilePagesComponents/TitleView';

import { 
    Container
} from './styles';

function MyProductsPage(){
    const [visible, setVisibility] = useState(false)
    
    return(
        <Container>
            <FlatlistProducts 
                 data={data}
                 onPress={() => setVisibility(!visible)}
            />
            
            <Modal
                isVisible={visible}
                animationIn="zoomIn"
                animationOut="zoomOut"
                animationInTiming={500}
                animationOutTiming={500}
                avoidKeyboard={true}
                coverScreen={true}
                onBackdropPress={() => setVisibility(false)}
            >       
                <ModalInfo 
                    sell
                />

            </Modal>
        </Container>
    )
}

export default MyProductsPage;