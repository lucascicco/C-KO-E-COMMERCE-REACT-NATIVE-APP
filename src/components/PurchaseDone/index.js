import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import CurrencyConverting from '~/utils/CurrencyConvert';

import {
  Container,
  Title_View_Row,
  Purchase_Success,
  Code_View,
  Code_Small,
  Code_Bigger,
  Purchase_data,
  Row_View,
  Column_View,
  Purchase_title,
  Purchase_small,
  Title_Two,
  Seller_View,
  Seller_name,
  Adress_text,
  Column_View_Two,
  Normal_View,
  Image_CKO,
  CKO_text,
  Continue_Button,
  Continue_Text,
  ScrollDetails,
} from './styles';

export default function PurchaseDone({ continueBuying, item }) {
  const { purchase, seller_info } = item;

  const dateDeliver = format(new Date(purchase.deliver_date), 'dd/MM/yyyy');

  const price_product = CurrencyConverting(purchase.total_price);

  return (
    <Container>
      <ScrollDetails>
        <Title_View_Row>
          <Purchase_Success>Compra realizada com sucesso!</Purchase_Success>

          <Code_View>
            <Code_Bigger>Código do pedido</Code_Bigger>
            <Code_Small>#{purchase.purchase_code}</Code_Small>
          </Code_View>
        </Title_View_Row>

        <Purchase_data>
          <Row_View>
            <Column_View>
              <Purchase_title>Data limite para entrega</Purchase_title>
              <Purchase_small>{dateDeliver}</Purchase_small>
            </Column_View>

            <Column_View>
              <Purchase_title>Total</Purchase_title>
              <Purchase_small>{price_product}</Purchase_small>
            </Column_View>
          </Row_View>
        </Purchase_data>

        <Seller_View>
          <Title_Two>Dados do vendedor</Title_Two>

          <Row_View>
            <Column_View>
              <Purchase_title>Nome</Purchase_title>
              <Seller_name>{seller_info.name}</Seller_name>
            </Column_View>

            <Column_View>
              <Purchase_title>Telefone</Purchase_title>
              <Purchase_small>{seller_info.cellphone}</Purchase_small>
            </Column_View>
          </Row_View>

          <Column_View_Two>
            <Purchase_title>Email para contato</Purchase_title>
            <Adress_text>{seller_info.email}</Adress_text>
          </Column_View_Two>
        </Seller_View>

        <Normal_View>
          <Image_CKO source={require('../../assets/Cko_logo.png')} />
          <CKO_text>
            Agradecemos pela sua confiança. Mas, agora é com a nossa equipe
            trabalhar com qualidade para garantir que seu pedido seja um
            sucesso. EQUIPE C-KO.
          </CKO_text>
        </Normal_View>
      </ScrollDetails>

      <Continue_Button onPress={continueBuying}>
        <Continue_Text>Continuar comprando</Continue_Text>
        <AntDesign name="arrowright" size={30} color="black" />
      </Continue_Button>
    </Container>
  );
}

PurchaseDone.propTypes = {
  item: PropTypes.shape({
    purchase: PropTypes.shape({
      purchase_code: PropTypes.string.isRequired,
      createdAt: PropTypes.instanceOf(Date).isRequired,
      total_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      deliver_date: PropTypes.instanceOf(Date).isRequired,
    }).isRequired,
    seller_info: PropTypes.shape({
      name: PropTypes.string.isRequired,
      cellphone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  continueBuying: PropTypes.func.isRequired,
};
