import React, { useState } from 'react';

import {
    Container,
    SubmitButton,
    Text_View,
    Text_Title,
    Text_Text,
    Date_View,
    Date_Text,
    Date_date,
    Row_View
} from './styles';

function StoppedPage(){
    return(
        <Container>
            <Text_View>
                <Text_Title>ACORDO - ANÚNCIO PAUSADO</Text_Title>

               
                  <Text_Text>  Para evitarmos complicações em nossa aplicação, estabelecemos
                    um acordo para quando o anúncio é pausado pelo vendedor, em que
                    é necessário uma análise da nossa administração sobre o produto em pauta,
                    e quando feita a análise, liberaremos duas opções que caberão apenas ao vendedor 
                    a escolher. 
                </Text_Text>

                <Text_Text>  A primeira é a exclusão do produto, 
                    essa opção torna o produto permanentemente inativo.
                </Text_Text>
                
                  <Text_Text>  A segunda é despausar o anúncio, 
                    dando assim continuidade na venda.
                </Text_Text>

                
                 <Text_Text> Entretanto, ambas dessas opções serão apenas liberadas num período de 15 dias após 
                    a pausa do anúncio.
                </Text_Text>

                <Text_Text>
                    Agradecemos a atenção. Conte conosco.
                </Text_Text>

                <Date_View>
                    <Row_View>
                        <Date_Text>Dias restantes:</Date_Text>
                        <Date_date> 9</Date_date>
                    </Row_View>

                    <Row_View>
                        <Date_Text>Status: </Date_Text>
                        <Date_date>Andamento</Date_date>
                    </Row_View>
                </Date_View>
            </Text_View>

             {/* FAZER CONDIÇÃO LÓGICA ONDE
                SE STATUS === ANDAMENTO -> NÃO MOSTRAR  OS DOIS BUTTONS ABAIXO,
                PORÉM, QUANDO ESTIVER LIBERADO, MOSTRAR PARA PODER FAZER A ESCOLHA.
            */}

            <SubmitButton style={{ background: '#d32f2f'}}>
                            EXCLUIR
            </SubmitButton>

            <SubmitButton style={{ background: '#8bc34a'}}>
                            DESPAUSAR
            </SubmitButton>

        </Container>
    )
}

export default StoppedPage