import React, { useMemo, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, onChange }) {
    const [opened, setOpened] = useState(false);

    const CurrentData = format(new Date(), 'dd/MM/yyyy')
    const dateFormatted = useMemo(() => format(date, 'dd/MM/yyyy'), [date])
    const TextOnScreen = dateFormatted === CurrentData ? 'Nascimento' : dateFormatted
  
    console.log(date)
    return (

        <Container>
          <DateButton onPress={() => setOpened(!opened)}>
            <Icon name="event" color="#fff" size={20} />
            <DateText>{TextOnScreen}</DateText>
          </DateButton>


          {opened && (
            <DateTimePicker
              value={date}
              onChange={onChange}
              maximumDate={new Date()}
              mode="date"
              locale="pt"
              display="spinner"
            />
            )}

        </Container>

  );
}

DateInput.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};