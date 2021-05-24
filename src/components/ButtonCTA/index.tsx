import React from 'react'
import { Button } from '@geist-ui/react'
import styled from 'styled-components'

const ButtonCTA = styled(({ isDark, ...rest }) => <Button {...rest} />)`
  height: 3.5rem !important;
  border-radius: 0px !important;
  font-weight: bolder !important;
  font-size: 1em !important;
  border: 0px !important;
  box-shadow: none !important;
  margin: 10px 0px 0px !important;
  width: 100% !important;
  text-transform: none !important;

  background-color: ${(props) => props.isDark ? 'rgb(0,255,252)': 'rgb(69,7,254)'}  !important;
  color: ${(props) => props.isDark ? '#000': '#fff'}  !important;

  &:hover {    
    background-color: ${(props) => props.isDark ? 'rgb(0,255,252)': 'rgb(69,7,254)'}  !important;    
  }
  
  &:disabled {
    background-color:#ddd !important;
    color: #333 !important;
  }
`
export default ButtonCTA;