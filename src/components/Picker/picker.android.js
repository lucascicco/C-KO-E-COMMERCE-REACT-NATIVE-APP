import React from 'react';
import { Picker } from 'react-native';
import { ContainerAndroid } from './styles';

function PickerCustom({data, visible, onPress, ...rest}){
    return(
        <ContainerAndroid>     
            <Picker
                {...rest}
                style={{ color: '#fff' }}
                >  
                {
                    data.map((item) => {
                        const labelName = `${item.sigla} - ${item.nome}`
                        return <Picker.Item 
                            label={labelName}
                            value={item.sigla}
                            key={item.sigla}
                        />
                    })
                }
            </Picker>  
        </ContainerAndroid>    
    )
}

export default PickerCustom