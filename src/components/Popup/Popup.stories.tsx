import React from 'react';
import { Popup } from './Popup';

export default {
  title: 'Popup',
};

export function Default(props: any) {
  return <Popup {...props}>Button</Popup>;
}

Default.argTypes = {
  onPress: { action: 'press' },
  onPressStart: { action: 'press start' },
  onPressEnd: { action: 'press end' },
  onPressUp: { action: 'press up' },
};

Default.args = {
  disabled: false,
};
