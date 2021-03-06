import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-community/picker';
import PropTypes from 'prop-types';
import ButtonType2 from '../ButtonType2';
import Button from '../ButtonType1';

import { MainContainer, Container } from './styles';

export default function PickerCustomY({
  editable,
  style,
  styleButton,
  label,
  value,
  data,
  text,
  ...rest
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <MainContainer style={style}>
      <ButtonType2
        onPress={() => (editable ? setModalVisible(true) : null)}
        text={text}
        icon="select-arrows"
        style={styleButton}
      />

      <Modal
        isVisible={modalVisible}
        animationIn="zoomIn"
        animationOut="zoomOut"
        animationInTiming={500}
        animationOutTiming={500}
        avoidKeyboard={false}
        coverScreen
        onBackdropPress={() => setModalVisible(false)}
      >
        <Container>
          <Picker
            {...rest}
            itemStyle={{
              fontFamily: 'raleway',
              color: '#FFF',
              fontSize: 25,
              height: 300,
            }}
          >
            <Picker.Item label={label} value={value} />

            {data.map((item, index) => {
              return (
                <Picker.Item
                  label={item.nome || item}
                  value={item.sigla || item}
                  key={item.sigla || index}
                />
              );
            })}
          </Picker>

          <Button
            style={{ background: '#283593' }}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            Selecionar
          </Button>
        </Container>
      </Modal>
    </MainContainer>
  );
}

PickerCustomY.propTypes = {
  editable: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number])
  ).isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  styleButton: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};

PickerCustomY.defaultProps = {
  style: {},
  styleButton: {},
};
