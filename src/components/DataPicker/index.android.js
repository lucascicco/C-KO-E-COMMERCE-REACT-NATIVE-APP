import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, onChange }) {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const CurrentData = format(new Date(), 'dd/MM/yyyy');
  const dateFormatted = format(date, 'dd/MM/yyyy');
  const TextOnScreen =
    dateFormatted === CurrentData ? 'Nascimento' : dateFormatted;
  const FontFamilyStyle = dateFormatted === CurrentData ? 'raleway' : 'Roboto';

  return (
    <Container>
      <DateButton onPress={() => setShowDatePicker(!showDatePicker)}>
        <Icon name="event" color="#fff" size={20} />
        <DateText style={{ fontFamily: FontFamilyStyle }}>
          {TextOnScreen}
        </DateText>
      </DateButton>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          onChange={(event, dateValue) => {
            onChange(event, dateValue); // I need to fix this problem yet.
          }}
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
