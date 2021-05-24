import React, { useContext } from 'react'
import { Text } from '@geist-ui/react'
import Tilt from 'react-tilt'
import { BigNumber, ethers } from 'ethers'
import styled, { ThemeContext } from 'styled-components'
import { useActiveWeb3React } from '../../../hooks'
import useI18n from '../../../hooks/useI18n'
import { CollectibleEdition } from '../../../data/Collectibles'
import { getCurrencyAmount } from '../../../utils'

export const StyledImage = styled.img``

export const StyledWrapper = styled.div`
  text-align: center;
  color: white !important;
  margin-bottom: 15px;
`

export const StyledTitle = styled(Text)`
  margin: 0px;
  font-weight: 700;
  font-size: 32px;
  margin-top: 10px;
`
export const StyledText = styled(Text)`
  margin: 0px;
  font-weight: 300;
  font-size: 18px;
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

interface DonateCardProps {
  collectible?: CollectibleEdition
}

export default function DonateCard({ collectible }: DonateCardProps, showTotalDonated: boolean) {
  const TranslateString = useI18n()
  const theme = useContext(ThemeContext)

  const { account } = useActiveWeb3React()

  return (
    <>
      {collectible && collectible.price && (
        <div>
          {collectible.uri && (
            <StyledTilt options={{ max: 40, scale: 1.08 }}>
              <StyledImage alt="NFT" src="/images/bitcao.png" />
            </StyledTilt>
          )}
          <StyledWrapper>
            {/* <StyledTitle>{collectible.name}</StyledTitle>
            <StyledText>{collectible.description}</StyledText> */}
            <StyledText>
              Doação mínima:{' '}
              <b>
                {getCurrencyAmount(collectible?.currency, collectible?.price)} {collectible.currency?.symbol}
              </b>
            </StyledText>
            {showTotalDonated && (
              <StyledText>
                Total arrecadado:{' '}
                <b>
                  {getCurrencyAmount(collectible?.currency, collectible?.price.mul(collectible.owners))} {collectible.currency?.symbol}
                </b>
              </StyledText>
            )}
          </StyledWrapper>
        </div>
      )}
    </>
  )
}
