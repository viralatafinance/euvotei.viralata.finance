import React from 'react'
import styled from 'styled-components'
import { Card } from '@geist-ui/react'

export const BodyWrapper = styled.div``

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
