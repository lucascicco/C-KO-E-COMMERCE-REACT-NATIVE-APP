import React from 'react';

import { ScrollViewItem, ViewItem, ScrollView_Text } from './styles';

export default function ScrollView_Item({ children, onPress }) {
  return (
    <ScrollViewItem onPress={onPress}>
      <ViewItem>
        <ScrollView_Text>{children}</ScrollView_Text>
      </ViewItem>
    </ScrollViewItem>
  );
}
