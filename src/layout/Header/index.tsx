import { Grid, Page, Tag, useMediaQuery, useModal } from '@geist-ui/react'
import { Sun, Moon } from '@geist-ui/react-icons'
import { ConnectorNames } from '@pancakeswap-libs/uikit'
import useTheme from 'hooks/useTheme'
import ConnectModal from 'components/WalletModal/ConnectModal'
import AccountModal from 'components/WalletModal/AccountModal'
import { useWeb3React } from '@web3-react/core'
import { connectorsByName } from 'connectors'
import React, { useState } from 'react'
import styled, { ThemeContext } from 'styled-components'

const StyledPageHeader = styled(Page.Header)`
  padding: 40px;
  z-index: 999;
`

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.a`
  display: flex;
  color: #000;
`

const LogoImage = styled.img`
  max-height: 150px !important;
`

const StyledConnect = styled(Tag)`
  border: 2px solid transparent !important;
  background: transparent !important;
  color: #4bf2cd !important;
  font-size: 16px !important;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid #4bf2cd;
  padding: 10px 25px !important;
  height: auto !important;
  border-radius: 6px;
  display: inline-block;
  font-weight: 700;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  cursor: pointer;
  line-height: inherit !important;

  :hover {
    transform: scale(1.05);
  }
`

const Header: React.FC = () => {
  const connectModal = useModal(false)
  const accountModal = useModal(false)
  const { isDark, toggleTheme, theme } = useTheme()

  const isDesktop = useMediaQuery('md', { match: 'up' })

  const { account, activate, deactivate } = useWeb3React()

  const handleLogin = (connectorId: ConnectorNames) => {
    const connector = connectorsByName[connectorId]
    if (connector) {
      activate(connector)
    }
  }

  const switchLightMode = () => {
    toggleTheme()
  }

  return (
    <StyledPageHeader>
      <ConnectModal isOpen={connectModal.visible} onDismiss={() => connectModal.setVisible(false)} login={handleLogin} />
      <AccountModal isOpen={accountModal.visible} onDismiss={() => accountModal.setVisible(false)} account={account || ''} logout={deactivate} />
      <Grid.Container justify="center">
        <Logo href="https://dogira.viralata.finance">
          <LogoImage src={isDesktop ? '/images/logo-black.png' : '/images/logo.png'} alt="Vira-lata Finance" />
        </Logo>
        <div role="button" aria-hidden="true" style={{ cursor: 'pointer', marginTop: 10 }} onClick={switchLightMode} onKeyDown={switchLightMode}>
          <Sun color={!isDark ? 'rgb(69,7,254)' : 'rgb(0,255,252,0.2)'} />
          <span> </span>
          <Moon color={isDark ? 'rgb(0,255,252)' : 'rgb(69,7,254,0.2)'} />
        </div>
        {/* <Grid xs alignItems="center" justify="flex-end" />
        <FlexDiv>
          <StyledConnect
            onClick={() => {
              if (account) {
                accountModal.setVisible(true)
              } else {
                connectModal.setVisible(true)
              }
            }}
          >
            {account ? `${account.substr(0, 4)}...${account.substr(-4)}` : `Connect Wallet`}
          </StyledConnect>
        </FlexDiv> */}
      </Grid.Container>
    </StyledPageHeader>
  )
}
export default Header
