import React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
};

export function Default(props: any) {
  return <Button {...props}>Button</Button>;
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
