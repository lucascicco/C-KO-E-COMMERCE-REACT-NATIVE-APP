import React, { useState, useMemo } from 'react';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import Button from '../ButtonType1';
import { Container, DateButton, DateText, Picker} from './styles';

export default function DateInput({ date, onChange }) {
  const [opened, setOpened] = useState(false);

  const CurrentData = format(new Date(), 'dd/MM/yyyy')
  const dateFormatted = useMemo(() => format(date, 'dd/MM/yyyy'), [date])
  const TextOnScreen = dateFormatted === CurrentData ? 'Nascimento' : dateFormatted
  const FontFamilyStyle = dateFormatted === CurrentData ? 'raleway' : 'Helvetica'

  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" color="#fff" size={20} />
        <DateText style={{fontFamily: FontFamilyStyle}}>{TextOnScreen}</DateText>
      </DateButton>
    
        <Modal
          isVisible={opened}
          animationIn="zoomIn"
          animationOut="zoomOut"
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
          coverScreen={true}
          onBackdropPress={() => setOpened(false)}
        >
            <Picker>
                <DateTimePicker
                  value={date}
                  onChange={onChange}
                  maximumDate={new Date()}
                  mode="date"
                  locale="pt"
                  display="spinner"
                  textColor="#FFF"
                />

                <Button style={{ background: '#283593', marginTop: 20}} onPress={() => setOpened(!opened)}>
                    Selecionar
                </Button>
            </Picker>
        </Modal>
    </Container>
  );
}

DateInput.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};