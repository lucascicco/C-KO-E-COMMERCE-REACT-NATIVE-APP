import React from 'react';
import FlatlistProducts from '../../components/MyProfilePagesComponents/MyProductsList';
import data from '../../utils/testing_data';
import { AntDesign } from '@expo/vector-icons'; 

import { 
    Container
} from './styles';


function MyProducts(){
    return(
        <Container>
            <FlatlistProducts 
                data={data}
            />
        </Container>
    )
}

export default MyProducts;