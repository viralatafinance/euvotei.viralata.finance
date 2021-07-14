import { Grid, Link, Page, Spacer, Text, useMediaQuery } from '@geist-ui/react'
import React from 'react'
import styled from 'styled-components'

const Footer: React.FC = () => {
  const isDesktop = useMediaQuery('md', { match: 'up' })

  const StyledPageFooter = styled(Page.Footer)`
    padding: 15px 20px;
    background-color: rgba(255, 255, 255, 0.97);
    z-index: 998;
    background: #000;
    width: 100% !important;
    position: relative !important;
    margin-top: auto;
  `

  const StyledContent = styled.div`
    width: 100%;
    margin: 0px auto;
    max-width: 1400px;
    color: white;
  `

  const StyledContentTop = styled(StyledContent)`
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 60px 20px 30px 20px !important;
  `

  const StyledContentBottom = styled(StyledContent)`
    padding: 30px 20px !important;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9em;
    font-weight: bold;

    ${!isDesktop &&
    ` width: 100%;
      text-align: center;

      & div {        
        justify-content: center;
      }
    `}
  `

  const StyledLink = styled(Link)`
    &:hover {
      color: #3cf0c8 !important;
    }
  `

  const StyledSocialMediaLinks = styled.div`
    ${!isDesktop &&
    `
    width: 100%;
    text-align: center
  `}
  `

  return (
    <StyledPageFooter>
      <StyledContentTop>
        <Grid.Container gap={2} justify="center">
          <Grid xs={24} sm={12} style={{ marginBottom: 20 }}>
            <div>
              <Text h3>Viralata Finance</Text>
              <StyledLink href="https://viralata.finance#">Website</StyledLink>
              <Spacer y={0.5} />
              <StyledLink href="https://t.me/viralatafinance">Telegram</StyledLink>
              <Spacer y={0.5} />
              <StyledLink href="https://twitter.com/viralatafinance">Twitter</StyledLink>
              <Spacer y={0.5} />
              <StyledLink href="https://exchange.viralata.finance">Buy</StyledLink>
            </div>
          </Grid>         
          <Grid xs={24} sm={12} style={{ marginBottom: 20 }}>
            <StyledSocialMediaLinks>
              <img src={isDesktop ? '/images/logo.png' : '/images/logo.png'} alt="Vira-lata Finance" />
            </StyledSocialMediaLinks>
          </Grid>
        </Grid.Container>
      </StyledContentTop>
      <StyledContentBottom>
        <Grid.Container gap={1} justify={isDesktop ? 'flex-start' : 'center'} style={{ textAlign: isDesktop ? 'left' : 'center' }}>
          <Grid xs={!isDesktop && 24}>© Viralata Finance. All rights reserved.</Grid>
        </Grid.Container>
      </StyledContentBottom>
    </StyledPageFooter>
  )
}
export default Footer
