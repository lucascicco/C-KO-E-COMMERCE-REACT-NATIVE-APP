import React, { useState, useEffect, Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import NumericInput from 'react-native-numeric-input';
import Background from '../../components/Background';
import ChangeAddressView from '../../components/ChangeAddress';
import FavoriteProduct from '../../components/HeartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { RequestFavoriteItems } from '../../store/modules/user/actions';
import api from '../../services/api';
import Modal from 'react-native-modal';


import { 
    Container,
    ProductView,
    ProductTitle,
    DetailsText,
    Details,
    PriceText,
    ProductImage,
    FeaturesView,
    SubmitButton,
    RowView,
    DescriptionView,
    DescriptionText,
    DescriptionScroll,
    DetailsTitle,
    Title_View,
    TextWarning,
    FreteButton,
    FreteText
} from './styles';

function ProductPage({ navigation, isFocused }){
    const dispatch = useDispatch()
    const product_id = navigation.getParam('product_id')
    const product_image = navigation.getParam('product_image')

    const profile =  useSelector(state => state.user.profile)
    
    const isFavorite = profile.myfavorites.includes(product_id)

    const [quantity, setQuantity] = useState(0)
    const [favorite, setFavorite] = useState(isFavorite)
    const [product, setProduct] = useState([])
    const [frete, setFrete] = useState(null)
    const [visible, setVisibility] = useState(false)

    const handleModalVisibilty = () => {
        setVisibility(!visible)
    }

    const handleLeavePage = () => {
        console.log(isFavorite)
        if(isFavorite !== favorite){
            dispatch(RequestFavoriteItems(product_id, favorite))
        }
    }

    const loadProduct = async () => {
        const response =  await api.get('product', {
            params: {
                product_id: product_id
            }
        })

        setProduct(response.data)

    }

    useEffect(() => {
        if(!isFocused){
            handleLeavePage()
        }else{
            loadProduct()
        }    
    }, [isFocused])

    
    return(
       <Background>
            {product && (
                <Container>
                    <ProductView>
                        <Title_View>
                            <ProductTitle>{product.product_name}</ProductTitle>

                            <FavoriteProduct onPressButton={() => setFavorite(!favorite)} favorite={favorite} />
                        </Title_View>

                        <RowView>
                            <ProductImage 
                                 source={{ uri: product_image }}
                             />

                            <FeaturesView>
                                <Details>
                                    <PriceText>R$ {product.price}</PriceText>
                                    <DetailsTitle>Quantidade</DetailsTitle>
                                    <NumericInput 
                                        onChange={value => setQuantity(value)} 
                                        minValue={0}
                                        maxValue={product.quantity}
                                        borderColor="black"
                                        textColor="black"
                                        inputStyle={{
                                            fontSize: 18,
                                            backgroundColor: 'white',
                                            borderColor: 'black',
                                            borderWidth: 1
                                        }} 
                                        rightButtonBackgroundColor="#b0bec5"
                                        leftButtonBackgroundColor="#b0bec5"
                                    />

                                    {frete === null ? (
                                        <FreteButton onPress={handleModalVisibilty}>
                                            <FreteText>Calcular frete</FreteText>
                                        </FreteButton>
                                    ): (
                                        <Fragment>
                                            <DetailsTitle>Preço frete</DetailsTitle>
                                            <DetailsText>R$ {frete}</DetailsText>
                                        </Fragment>
                                    )}
                                </Details>   
                            </FeaturesView>
                        </RowView>

                    {
                        product.purchasable ? (
                            <SubmitButton onPress={() => navigation.navigate('PurchasePartOne', {
                                product: product,
                                quantity: quantity
                            })}>
                                Comprar
                            </SubmitButton>
                    ) : (
                            <TextWarning>
                                Produto temporariamente esgostado
                            </TextWarning>
                    )}
                    </ProductView>

                    <DescriptionView style={styles.ShadowConfig}>
                        <DetailsTitle>Sobre o produto</DetailsTitle>

                        <DescriptionScroll>
                                <DescriptionText>
                                    {product.description}
                                </DescriptionText>
                        </DescriptionScroll>
                    </DescriptionView>
                </Container>
            )}

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
                <ChangeAddressView onCalculatePress={() => setVisibility(!visible)} location={profile.location} />
            </Modal>
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

export default withNavigationFocus(ProductPage)