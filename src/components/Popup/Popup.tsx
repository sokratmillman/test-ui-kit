import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
import { useFocusTrap } from '@use-platform/react'

import './Popup.css'

export default function Popup(props: any) {
  const { children, visible } = props
  const scopeRef = useRef(null)

  useFocusTrap({ enabled: visible, scopeRef })

  if (!visible) {
    return null
  }

  return createPortal(
    <div ref={scopeRef} className="Popup">
      {children}
    </div>,
    document.body,
  )
}