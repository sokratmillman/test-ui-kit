import React, { useState } from 'react'
import { TextField } from './TextField'

export default {
  title: 'TextField',
}

export function Default() {
  const [value, setValue] = useState()
  const onChange = (event: { target: { value: React.SetStateAction<undefined> } }) => setValue(event.target.value)

  return <TextField value={value} onChange={onChange} />
}