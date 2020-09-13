import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, TextInput, FieldSet, Label } from './styled'

const AutoExpandInput = ({
  inputProps = {},
  autoSize,
  label,
  errorField,
  value,
  classes = {}
}) => {
  const inputRef = useRef(null)

  const handleAutoSize = () => {
    const el = inputRef.current
    if (autoSize && el) {
      const offset = el.offsetHeight - el.clientHeight
      el.style.cssText = 'height:auto;'
      el.style.cssText = `height: ${el.scrollHeight + offset}px`
    }
  }

  const onResize = () => {
    handleAutoSize()
  }

  useEffect(() => {
    handleAutoSize()
  }, [value])

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <Wrapper className={classes.rootClass}>
      <TextInput
        {...inputProps}
        autoSize
        className={classes.inputClass}
        ref={inputRef}
        innerRef={inputRef}
        error={errorField}
        value={value}
      />
      <FieldSet error={errorField} className='fieldset' />
      <Label className='label'>{label}</Label>
    </Wrapper>
  )
}

AutoExpandInput.propTypes = {
  inputProps: PropTypes.object.isRequired,
  autoSize: PropTypes.bool,
  errorField: PropTypes.bool,
  label: PropTypes.string
}
AutoExpandInput.defaultProps = {
  autoSize: true,
  errorField: false,
  label: ''
}

export default AutoExpandInput
