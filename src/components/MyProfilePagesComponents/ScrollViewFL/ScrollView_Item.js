import React from 'react';
import PropTypes from 'prop-types';

import { ScrollViewItem, ViewItem, ScrollView_Text } from '../styles';

export default function ScrollView_Item({ children, onPress }) {
  return (
    <ScrollViewItem onPress={onPress}>
      <ViewItem>
        <ScrollView_Text>{children}</ScrollView_Text>
      </ViewItem>
    </ScrollViewItem>
  );
}

ScrollView_Item.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
