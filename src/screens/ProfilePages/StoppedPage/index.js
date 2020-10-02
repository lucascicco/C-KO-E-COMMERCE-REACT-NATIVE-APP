import React from 'react';
import { formatDistanceStrict, addDays, isAfter } from 'date-fns';
import PropTypes from 'prop-types';
import api from '~/services/api';

import {
  Container,
  SubmitButton,
  Text_View,
  Text_Title,
  Text_Text,
  Date_View,
  Date_Text,
  Date_date,
} from './styles';

export default function StoppedPage({ navigation }) {
  const product = navigation.getParam('product');
  const FreeDate = addDays(new Date(product.pausedAt), 15);
  const currentDate = new Date();

  const DaysMissing = formatDistanceStrict(currentDate, FreeDate, {
    unit: 'day',
  });

  const isAvailableToChange = isAfter(currentDate, FreeDate);

  const RemovePause = async () => {
    await api.put('changestatus', {
      product_id: product.product_id,
      status: 'open',
      paused_at: null,
    });

    navigation.goBack();
  };

  const DeleteItem = async () => {
    await api.put('changestatus', {
      product_id: product.product_id,
      status: 'deleted',
    });

    navigation.goBack();
  };

  return (
    <Container>
      <Text_View>
        <Text_Title>ACORDO - PAUSA DE ANÚNCIO </Text_Title>

        <Text_Text>
          {' '}
          Para evitarmos complicações em nossa aplicação, estabelecemos um
          acordo para quando o anúncio é pausado pelo vendedor, em que é
          necessário uma análise da nossa administração sobre o produto em
          pauta, e quando feita a análise, liberaremos duas opções que caberão
          apenas ao vendedor a escolher.
        </Text_Text>

        <Text_Text>
          {' '}
          A primeira é a exclusão do produto, essa opção torna o produto
          permanentemente inativo.
        </Text_Text>

        <Text_Text>
          {' '}
          A segunda é despausar o anúncio, dando assim continuidade na venda.
        </Text_Text>

        <Text_Text>
          {' '}
          Entretanto, ambas dessas opções serão apenas liberadas num período de
          15 dias após a pausa do anúncio.
        </Text_Text>

        <Text_Text>Agradecemos a atenção. Conte conosco.</Text_Text>

        <Date_View>
          <Date_Text>Dias restantes para liberação: </Date_Text>
          <Date_date>{DaysMissing.replace('days', 'dias')}</Date_date>
        </Date_View>
      </Text_View>

      {isAvailableToChange && (
        <>
          <SubmitButton style={{ background: '#d32f2f' }} onPress={DeleteItem}>
            EXCLUIR
          </SubmitButton>

          <SubmitButton style={{ background: '#8bc34a' }} onPress={RemovePause}>
            DESPAUSAR
          </SubmitButton>
        </>
      )}
    </Container>
  );
}

StoppedPage.navigationOptions = () => ({
  title: 'Termo de pausa',
  headerBackTitle: 'Voltar',
});

StoppedPage.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
