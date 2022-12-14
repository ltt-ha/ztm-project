import styled, {css} from 'styled-components'

const subColor= 'gray';
const mainColor= 'black';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`
export const Group=styled.div`
position: relative;
  margin: 100px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`
export type FormInputLabelProps={
  shrink?: boolean
}
export const FormInputLabel=styled.label<FormInputLabelProps>`
color: ${subColor};
    font-size: 20px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    ${({shrink})=>(shrink && shrinkLabelStyles)}

    ${'' /* &.shrink {
      @include shrinkLabel();
    } */}
`
export const FormInputStyles=styled.input`
    background: none;
    background-color: white;
    color: $sub-color;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin: 25px 0;
    &:focus {
      outline: none;
    }
    &:focus ~ ${FormInputLabel} {
      ${shrinkLabelStyles};
    }
    
`