import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  :focus {
    outline: none;
  }
  :hover {
    fieldset {
      border-color: #000;
    }
  }
  textarea:focus + fieldset {
    border-width: 2px;
    border-color: blue;
  }
  textarea:focus ~ .label {
    font-size: 10px;
    top: 0;
    background: #fff;
    padding-left: 5px;
    padding-right: 5px;
  }
  textarea:not(:empty) ~ .label {
    font-size: 10px;
    top: 0;
    background: #fff;
    padding-left: 5px;
    padding-right: 5px;
  }
`

export const TextInput = styled.textarea`
  resize: none;
  padding: 10px 10px;
  width: 100%;
  box-sizing: border-box;
  border-width: 0;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  -webkit-appearance: none;
  ${(props) => props.autoSize && 'overflow:hidden'}
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

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

export const FieldSet = styled.fieldset`
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  cursor: text;
  pointer-events: none;
  border: 1px solid grey;
  border-color: grey;
  &:hover {
    border-color: grey;
  }
`
