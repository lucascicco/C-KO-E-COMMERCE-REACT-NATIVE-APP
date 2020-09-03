import React, { useState, useEffect } from 'react';
import FlatlistProducts from '../../components/MyProfilePagesComponents/PurchasesFlatList';
import TitleView from '../../components/MyProfilePagesComponents/TitleView'
import data from '../../utils/testing_data';
import Modal from 'react-native-modal';
import ModalInfo from '../../components/MyProfilePagesComponents/ModalContact';


import { 
    Container
} from './styles';

function MyProductsPage(){
    const [visible, setVisibility] = useState(false)
    
    return(
        <Container>
            <TitleView>Minhas Compras</TitleView>

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

                />
      
            </Modal>
        </Container>
    )
}

export default MyProductsPage;