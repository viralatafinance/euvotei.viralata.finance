import { Grid, Page, Tag, useMediaQuery, useModal, Link } from '@geist-ui/react'
import { Sun, Moon } from '@geist-ui/react-icons'
import { ConnectorNames } from '@pancakeswap-libs/uikit'
import numeral from 'numeral'
import useTheme from 'hooks/useTheme'
import { useTokenBalancesWithLoadingIndicator } from 'state/wallet/hooks'
import ConnectModal from 'components/WalletModal/ConnectModal'
import AccountModal from 'components/WalletModal/AccountModal'
import { useWeb3React } from '@web3-react/core'
import { connectorsByName } from 'connectors'
import React, { useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { useCollectibleEditions } from '../../data/Collectibles'

const StyledPageHeader = styled(Page.Header)`
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
  margin: 0 auto;
`

const StyledConnect = styled(({ isDark, ...rest }) => <Tag {...rest} />)`
  text-align: center;
  border: 2px solid transparent !important;
  background: transparent !important;
  color: ${(props) => (props.isDark ? 'rgb(0,255,252)' : 'rgb(69,7,254)')} !important;
  font-size: 16px !important;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid ${(props) => (props.isDark ? 'rgb(0,255,252)' : 'rgb(69,7,254)')};
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

const StyledLink = styled(({ isDark, ...rest }) => <Link {...rest} />)`
  color: ${(props) => (props.isDark ? 'rgb(0,255,252)' : 'rgb(69,7,254)')} !important;
  font-size: 16px !important;
  font-weight: 700;
  text-align: center;

  :hover {
    transform: scale(1.05);
  }
`

const Header: React.FC = () => {
  const connectModal = useModal(false)
  const accountModal = useModal(false)
  const { isDark, toggleTheme, theme } = useTheme()

  const isDesktop = useMediaQuery('md', { match: 'up' })

  const REAU = '0x4c79b8c9cB0BD62B047880603a9DEcf36dE28344'

  const { account, activate, deactivate } = useWeb3React()
  const [token] = useTokenBalancesWithLoadingIndicator(account, [
    { address: REAU, chainId: 56, decimals: 9, name: 'Viralata Finance', symbol: 'REAU', equals: undefined, sortsBefore: undefined },
  ])

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
    <StyledPageHeader style={{ padding: isDesktop ? 40 : 20, marginTop: isDesktop ? 0 : 20 }}>
      <ConnectModal isOpen={connectModal.visible} onDismiss={() => connectModal.setVisible(false)} login={handleLogin} />
      <AccountModal isOpen={accountModal.visible} onDismiss={() => accountModal.setVisible(false)} account={account || ''} logout={deactivate} />
      <Grid.Container justify="space-between" direction={isDesktop ? 'row' : 'column-reverse'}>
        <Logo href="https://dogira.viralata.finance">
          <LogoImage
            style={{ width: isDesktop ? 'auto' : '100%', maxHeight: isDesktop ? '100px' : 'auto', height: isDesktop ? 'auto' : 'auto' }}
            src={isDesktop ? '/images/logo-black.png' : '/images/logo.png'}
            alt="Vira-lata Finance"
          />
        </Logo>
        <Grid xs alignItems="center" justify={isDesktop ? 'flex-end' : 'space-between'} style={{ marginBottom: isDesktop ? 0 : 20 }}>
          <StyledLink isDark={isDark} href="https://exchange.viralata.finance" style={{ margin: '0 15px' }}>
            BUY REAU
          </StyledLink>
          <FlexDiv style={{ margin: '0 15px' }}>
            <StyledConnect
              isDark={isDark}
              onClick={() => {
                if (account) {
                  accountModal.setVisible(true)
                } else {
                  connectModal.setVisible(true)
                }
              }}
            >
              {account ? `${account.substr(0, 4)}...${account.substr(-4)} (${numeral(token[REAU]?.toSignificant(6)).format('0.000a')} REAU)` : `Connect Wallet`}
            </StyledConnect>
          </FlexDiv>
          <div role="button" aria-hidden="true" style={{ cursor: 'pointer' }} onClick={switchLightMode} onKeyDown={switchLightMode}>
            <Sun color={!isDark ? 'rgb(69,7,254)' : 'rgb(0,255,252,0.2)'} />
            <span style={{ marginRight: 5 }}> </span>
            <Moon color={isDark ? 'rgb(0,255,252)' : 'rgb(69,7,254,0.2)'} />
          </div>
        </Grid>
      </Grid.Container>
    </StyledPageHeader>
  )
}
export default Header
