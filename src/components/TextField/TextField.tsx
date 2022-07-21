import React, { useRef, forwardRef } from 'react';
import { useHover, useForkRef } from '@use-platform/react';

import './TextField.css';

export const TextField = forwardRef((props: any, ref: any) => {
  const { addonAfter, ...otherProps } = props;
  const inputRef = useRef(null);
  const { isHovered, hoverProps } = useHover(otherProps);
  const forkedRef = useForkRef(inputRef, ref);

  return (
    <div {...hoverProps} className="TextField" data-hovered={isHovered}>
      <textarea ref={forkedRef} className="TextField-Control" />
      {addonAfter}
    </div>
  );
});

export default TextField;
