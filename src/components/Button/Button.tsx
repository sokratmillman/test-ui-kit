import React, { useRef } from 'react';
import { useHover, useButton, mergeProps } from '@use-platform/react';

import './Button.css';

export function Button(props: { [x: string]: any; children: any; addonAfter: any }) {
  const { children, addonAfter, ...otherProps } = props;
  const buttonRef = useRef(null);
  const { isHovered, hoverProps } = useHover(otherProps);
  const { isPressed, buttonProps } = useButton(otherProps, buttonRef);

  return (
    <button
      type="submit"
      {...mergeProps(buttonProps, hoverProps)}
      ref={buttonRef}
      className="Button"
      data-disabled={otherProps.disabled}
      data-hovered={isHovered}
      data-pressed={isPressed}
      aria-label="Button"
    >
      {typeof children === 'string' ? <span className="Button-Text">{children}</span> : children}
      {addonAfter}
    </button>
  );
}
export default Button;
