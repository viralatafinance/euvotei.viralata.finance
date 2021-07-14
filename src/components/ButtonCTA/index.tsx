import React from 'react'
import { Button } from '@geist-ui/react'
import styled from 'styled-components'

const ButtonCTA = styled(({ isDark, ...rest }) => <Button {...rest} />)`
  height: 3.5rem !important;
  border-radius: 0px !important;
  font-weight: bolder !important;
  font-size: 1em !important;
  border: 1px solid #3cf0c8 !important;
  box-shadow: none !important;
  margin: 0px 0px 0px !important;
  width: 100% !important;
  text-transform: uppercase !important;

  background-color: ${(props) => props.isDark ? 'rgb(0,0,0)': 'rgb(0,0,0)'}  !important;
  color: ${(props) => props.isDark ? '#3cf0c8': '#3cf0c8'}  !important;

  &:hover {    
    background-color: ${(props) => props.isDark ? '#3cf0c8': '#3cf0c8'}  !important;    
    color: ${(props) => props.isDark ? '#000': '#000'}  !important;
  }
  
  &:disabled {
    background-color:#ddd !important;
    color: #333 !important;
    border: 0px solid #3cf0c8 !important;
  }
`
export default ButtonCTA;