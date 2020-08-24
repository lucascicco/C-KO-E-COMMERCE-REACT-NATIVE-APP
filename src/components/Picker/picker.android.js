import React from 'react';
import { Picker } from 'react-native';
import { ContainerAndroid } from './styles';

function PickerCustom({style, data, ...rest}){
    return(
        <ContainerAndroid style={style}>     
            <Picker
                {...rest}
                style={{ color: '#fff' }}
                >  
                {
                    data.map((item, index) => {
                        const labelName = `${item.sigla || index + 1} - ${item.nome}`
                        return <Picker.Item 
                            label={labelName}
                            value={item.sigla || item.nome}
                            key={item.sigla || index + 1}
                        />
                    })
                }
            </Picker>  
        </ContainerAndroid>    
    )
}

export default PickerCustom