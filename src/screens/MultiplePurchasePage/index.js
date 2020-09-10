import React from 'react';
import FlatlistProducts from '../../components/MyProfilePagesComponents/MultipleFlatlist';
import data from '../../utils/testing_data';

import { 
    Container,
    Total_View,
    Total_Price,
} from './styles';


function MyMultiplePurchase(){
    return(
        <Container>
            <FlatlistProducts 
                data={data}
            />

            <Total_View>
                <Total_Price>R$ 8.000,00</Total_Price>
            </Total_View>
        </Container>
    )
}

export default MyMultiplePurchase;