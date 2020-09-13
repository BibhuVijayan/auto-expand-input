import React, { useState } from 'react'

import AutoExpandInput from 'auto-expand-input'
import 'auto-expand-input/dist/index.css'

const App = () => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <AutoExpandInput
      classes={{ rootClass: '', inputClass: '' }}
      label='Auto expand input'
      autoSize
      value={value}
      inputProps={{
        onChange: onChange,
        rows: 1
        // all other natives props are goes here..
      }}
    />
  )
}

export default App
