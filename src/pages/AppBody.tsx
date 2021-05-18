import React from 'react'
import styled from 'styled-components'
import { Card } from '@geist-ui/react'

export const BodyWrapper = styled(Card)`
  // position: relative;
  width: 100%;
  // z-index: 5;
  // padding: 0px !important;
  // min-width: 360px;

  // display: flex;
  // flex-direction: column;

  background: transparent !important;
  box-shadow: none !important;
  border-radius: 5px !important;
  border: none !important;

  // margin-top: 250px !important;

  // & > div.content {
  //   padding: 20px 20px !important;
  //   display: flex;
  //   flex-direction: column;
  // }
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
