import React from 'react';
import { MyButton } from './Button';

export default {
  title: 'Button',
};

export function Default(props: any) {
  return <MyButton {...props}>Button</MyButton>;
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
