import React from 'react';
import FlatlistProducts from '../../components/MyProfilePagesComponents/MyProductsList';
import data from '../../utils/testing_data';

import { 
    Container
} from './styles';


export default function MyProducts(){
    return(
        <Container>
            <FlatlistProducts 
                data={data}
            />
        </Container>
    )
}
