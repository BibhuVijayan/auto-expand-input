import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  :focus {
    outline: none;
  }
  :hover {
    fieldset {
      border-color: grey;
    }
  }

  textarea:focus + fieldset {
    border-width: 2px;
    border-color: blue;
  }
`

export const TextInput = styled.textarea`
  resize: none;
  padding: 10px 10px;
  width: 100%;
  box-sizing: border-box;
  min-height: 90px;
  border-width: 0;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  -webkit-appearance: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    opacity: 1;
    color: grey;
  }
  &::-webkit-input-placeholder {
    opacity: 1;
    color: grey;
  }
  &::-moz-placeholder {
    opacity: 1;
    color: grey;
  }
  &:-ms-input-placeholder {
    opacity: 1;
    color: grey;
  }
  &:-moz-placeholder {
    opacity: 1;
    color: grey;
  }
`

export const Label = styled.span`
  position: absolute;
  cursor: text;
  pointer-events: none;
  left: 9px;
  background: transparent;
  cursor: text;
  transition: all 0.15s ease-in-out;
  z-index: 4;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`

export const FieldSet = styled.fieldset`
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  bottom: 6px;
  right: 0;
  cursor: text;
  pointer-events: none;
  border: 1px solid grey;
  border-color: red;
  &:hover {
    border-color: grey;
  }
`
