import React, { useState, useEffect } from 'react';
import ProductList from '../../components/ItemsBox';
import { Octicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { StyleSheet, Platform } from 'react-native';
import Background from '../../components/Background4'
import Modal from 'react-native-modal';
import Categorias from '../../utils/Categorias'
import data from '../../utils/testing_data';
import { Picker } from '@react-native-community/picker'

import {
    Container,
    SearchInput,
    ViewUp,
    ButtonCategory,
    HighestView,
    ButtonCart,
    LogoView,
    LogoImage,
    TextTitle,
    ModalView,
    SubmitButton,
    FilterText,
    FilterView
} from './styles';


function HomePage() {
    const [search, setSearch] = useState('');
    const [categorySelected, setCategorySearch] = useState('');
    const [visible, setVisibility] = useState(false);
    
    return(
        <Background>
            <Container>
                <HighestView>
                    <LogoView>
                        <LogoImage
                            source={require('../../assets/Cko_logo.png')}
                            resizeMode="cover"
                        />
                        <TextTitle>
                            Página inicial
                        </TextTitle>
                    </LogoView>

                    <ButtonCart style={styles.ShadowConfig}>
                        <MaterialCommunityIcons name="cart-outline" size={35} color="white" />
                    </ButtonCart>
                </HighestView>

                <ViewUp>
                    <SearchInput
                        icon="search"
                        placeholder="Buscar"
                        autoCorrect={true}
                        maxLength={30}
                        autoCapitalize="none"
                        returnKeyType="send"
                        onChangeText={setSearch}
                        value={search}
                        style={{ 
                            borderRadius: 0,
                            backgroundColor: '#b0bec5',
                            flex: 1
                        }}
                        textStyle={{
                            color: 'black'
                        }}
                        onSubmitEditing={() => console.log('Sended')}
                    />
                    <ButtonCategory style={styles.ShadowConfig}>
                        <Octicons name="settings" size={35} color="white" onPress={() => setVisibility(!visible)}/>
                    </ButtonCategory> 
                </ViewUp>
                
                <FilterView>
                    {(categorySelected !== '' && categorySelected !== null) && 
                    (<FilterText>Categoria filtrada: {categorySelected}</FilterText>)}
                </FilterView>
               

                <ProductList 
                    data={data}
                />
                
                 <Modal 
                     isVisible={visible}
                     animationIn="zoomIn"
                     animationOut="zoomOut"
                     animationInTiming={500}
                     avoidKeyboard={false}
                     coverScreen={true}
                 >
                     <ModalView>
                        <Picker
                           selectedValue={categorySelected}
                           onValueChange={(item, index) => {
                                  setCategorySearch(item)
                              }}
                           itemStyle={{
                                fontFamily: 'raleway',
                                fontSize: 25
                           }}
                           mode="dropdown"
                           >
                            {
                                Platform.OS === 'ios' && (
                                    <Picker.Item
                                        label="Selecione uma categoria"
                                        value={null}
                                    /> 
                                )
                            }
                            {
                                Categorias.map((item, index) => {
                                    return (
                                        <Picker.Item 
                                            label={item}
                                            value={item}
                                            key={item}
                                        />
                                    )
                                })
                            }
                        </Picker>

                         <SubmitButton style={{ background: '#283593'}} onPress={() => setVisibility(!visible)}>Filtrar</SubmitButton>
                     </ModalView> 
                </Modal>
        
            </Container>  
        </Background>
    )
}

const styles = StyleSheet.create({
    ShadowConfig: {
        shadowColor: "black",
        shadowOffset: {
        	width: 2,
        	height: 8,
        },
        shadowOpacity: 0.65,
        shadowRadius: 2.00,
        elevation: 12
    }
})

export default HomePage