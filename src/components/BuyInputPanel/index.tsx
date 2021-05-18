import React, { useState, useCallback } from 'react'
import { Currency, Pair } from '@pancakeswap-libs/sdk'
import { Button, Text } from '@geist-ui/react'
import { ChevronDown } from '@geist-ui/react-icons'
import styled from 'styled-components'
import { darken } from 'polished'
import useI18n from 'hooks/useI18n'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import CurrencySearchModal from '../SearchModal/CurrencySearchModal'
import CurrencyLogo from '../CurrencyLogo'
import DoubleCurrencyLogo from '../DoubleLogo'
import { RowBetween } from '../Row'
import { Input as NumericalInput } from '../NumericalInput'
import { useActiveWeb3React } from '../../hooks'

const InputRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0.75rem 0.5rem 0.75rem 1rem;
`
const LabelRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: #fff;
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.75rem 1rem 0 1rem;
  span:hover {
    cursor: pointer;
    color: ${({ theme }) => darken(0.2, theme.colors.textSubtle)};
  }
`
const Aligner = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const InputPanel = styled.div<{ hideInput?: boolean }>`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  color: #fff;
  z-index: 1;
`
const Container = styled.div<{ hideInput: boolean }>`
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(75, 242, 205);
`

const StyledText = styled(Text)`
  margin: 0;
  font-weight: 500 !important;
`

const StyledTextHover = styled(Text)`
  margin: 0 !important;
  display: inline !important;
  cursor: pointer !important;
  font-weight: 500 !important;

  :hover {
    color: #4bf2cd !important;
  }
`

interface CurrencyInputPanelProps {
  value: string
  onUserInput: (value: string) => void
  label?: string
  currency?: Currency | null
  id: string
}
export default function BuyInputPanel({ value, onUserInput, label, currency, id }: CurrencyInputPanelProps) {
  const { account } = useActiveWeb3React()
  const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined)
  const TranslateString = useI18n()
  const translatedLabel = label || TranslateString(132, 'Input')
  return (
    <InputPanel id={id}>
      <Container hideInput={false}>
        <LabelRow>
          <RowBetween>
            <StyledText>{translatedLabel}</StyledText>
            {account && (
              <StyledTextHover onClick={() => onUserInput(selectedCurrencyBalance?.toSignificant(6) || '0')}>
                {!!currency && selectedCurrencyBalance ? `Saldo: ${selectedCurrencyBalance?.toSignificant(6)}` : ' -'}
              </StyledTextHover>
            )}
          </RowBetween>
        </LabelRow>
        <InputRow>
          <NumericalInput
            className="token-amount-input"
            value={value}
            onUserInput={(val) => {
              onUserInput(val)
            }}
          />
          {currency && (
            <Aligner style={{ marginRight: 8 }}>
              <CurrencyLogo currency={currency} size="24px" style={{ marginRight: '8px', width: 24, height: 24 }} />
              <StyledText>
                {currency && currency.symbol && currency.symbol.length > 20
                  ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(currency.symbol.length - 5, currency.symbol.length)}`
                  : currency?.symbol}
              </StyledText>
            </Aligner>
          )}
        </InputRow>
      </Container>
    </InputPanel>
  )
}
