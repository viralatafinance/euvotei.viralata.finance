/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Text, useMediaQuery, Grid, useToasts, Spinner } from '@geist-ui/react'
import Tilt from 'react-tilt'
import styled from 'styled-components'

import { Wrapper } from '../../components/swap/styleds'
import ButtonCTA from '../../components/ButtonCTA'
import { useActiveWeb3React } from '../../hooks'
import useI18n from '../../hooks/useI18n'
import AppBody from '../AppBody'
import useTheme from '../../hooks/useTheme'
import CopyToClipboard from '../../components/WalletModal/CopyToClipboard'
import { useCollectibleFactoryContract } from '../../hooks/useContract'


export const StyledImage = styled.img``

export const StyledWrapper = styled(Wrapper)`
  padding: 30px 40px;
  margin-left: 100px;
  width: 60%;
  color: #fffd;
  border: 1px solid #4bf2cd;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px !important;
`

export const StyledTitle = styled(Text)`
  font-size: 75px;
  line-height: 95px;
  font-weight: 900;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: -2px;
`

export const StyledText = styled(Text)`
  margin: 0px;
  font-weight: 300;
  color: white !important;
  font-size: 32px;
  text-align: center;
  margin-top: 10px;
`

export const StyledTilt = styled(Tilt)`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 400px;
`

const StyledContent = styled.div`
  z-index: 999;
  color: #fff;
  text-align: center;
  max-width: 1200px;
  padding: 20px;
  margin-top: 25px;
  margin-bottom: 50px;
`

export interface CollectibleEdition {
  uri: string
  currency?: any
  price: string
  startBlock: string
  endBlock: string
  limit: string
  owners: string
}

const Donate = () => {
  const TranslateString = useI18n()

  const { account } = useActiveWeb3React()

  const [loading, setLoading] = useState(false)
  const [toasts, setToast] = useToasts()
  const isDesktop = useMediaQuery('md', { match: 'up' })
  const [claimed, setClaimed] = useState(false)
  const [whitelisted, setWhitelisted] = useState(false)
  const [totalClaimable, setTotalClaimable] = useState(0)
  const [totalClaimed, setTotalClaimed] = useState(0)
  const [forceReload, setForceReload] = useState(0)
  const collectibleFactoryContract = useCollectibleFactoryContract(true)

  useEffect(() => {
    async function fetch() {

      if (account) {
        const _whitelisted: any = await collectibleFactoryContract.whitelisted(account);
        const _claimed: any = await collectibleFactoryContract.claimed(account);
        const _totalClaimable: any = await collectibleFactoryContract.totalClaimable();
        const _totalClaimed: any = await collectibleFactoryContract.totalClaimed();
        setClaimed(_claimed);
        setWhitelisted(_whitelisted);
        setTotalClaimable(_totalClaimable);
        setTotalClaimed(_totalClaimed);
      }

    }
    fetch()
  }, [account, forceReload])

  const mint = async (edition) => {
    setLoading(true)

    try {
      const tx = await collectibleFactoryContract.mint(edition);
      await tx.wait(3)
      setToast({ text: 'Você resgatou o seu NFT!' })
      setForceReload(forceReload + 1)
    } catch (ex) {
      setToast({ text: ex.message })
    }
    setLoading(false)
  }

  return (
    <>
      <StyledContent className={`${!isDesktop ? 'neon-content-mobile' : ''}`}>
        <h1 style={{ color: '#3cf0c8' }}>EU VOTEI</h1>
        <span className="neon-words__word">
          Cada um dos <b>521 votos</b> fez parte de um momento histórico do projeto.
          <br />
          <b>Queremos deixar isso registrado na blockchain.</b>
          <br />
          Se você participou da votação pelo futuro do projeto, você tem direito a <b>um</b> dos três NFTs abaixo. <b>Escolha com carinho!</b> 🐶
        </span>


        <Grid.Container gap={4} justify="center" style={{ marginTop: 40 }}>
          <Grid xs={24} sm={8} style={{ marginBottom: 20 }}>
            <div>
              <img src="/images/blue-min.gif" alt="Vira-lata Finance" />
              <ButtonCTA disabled={claimed || !account || !whitelisted} onClick={() => { mint(2) }}>
                {!account ? 'CLIQUE EM CONECTAR CARTEIRA' : !whitelisted ? 'NÃO ELEGÍVEL' : claimed ? 'JÁ RESGATOU' : 'RESGATAR'}
              </ButtonCTA>
            </div>
          </Grid>
          <Grid xs={24} sm={8} style={{ marginBottom: 20 }}>
            <div>
              <img src="/images/grey-min.gif" alt="Vira-lata Finance" />
              <ButtonCTA disabled={claimed || !account || !whitelisted} onClick={() => { mint(1) }}>
                {!account ? 'CLIQUE EM CONECTAR CARTEIRA' : !whitelisted ? 'NÃO ELEGÍVEL' : claimed ? 'JÁ RESGATOU' : 'RESGATAR'}
              </ButtonCTA>
            </div>
          </Grid>
          <Grid xs={24} sm={8} style={{ marginBottom: 20 }}>
            <div>
              <img src="/images/white-min.gif" alt="Vira-lata Finance" />
              <ButtonCTA disabled={claimed || !account || !whitelisted} onClick={() => { mint(0) }}>
                {!account ? 'CLIQUE EM CONECTAR CARTEIRA' : !whitelisted ? 'NÃO ELEGÍVEL' : claimed ? 'JÁ RESGATOU' : 'RESGATAR'}
              </ButtonCTA>
            </div>
          </Grid>
        </Grid.Container>

        <h2 style={{ color: '#3cf0c8', marginTop: 20 }}>{totalClaimed.toString()} de {totalClaimable.toString()} resgatados</h2>

      </StyledContent>
    </>

  )
}

export default Donate
