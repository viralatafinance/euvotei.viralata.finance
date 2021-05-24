/* eslint-disable */
import React, { useContext, useEffect, useState } from 'react'
import { Text, useMediaQuery, Link, Modal, useModal, Grid, Loading, useToasts, Spinner } from '@geist-ui/react'
import { TokenAmount } from '@pancakeswap-libs/sdk'
import { BigNumber } from 'ethers'
import { Flex } from '@pancakeswap-libs/uikit'
import Tilt from 'react-tilt'
import styled from 'styled-components'
import numeral from 'numeral'
import axios from 'axios'

import { useTokenBalancesWithLoadingIndicator } from 'state/wallet/hooks'
import { ApprovalState, useApproveCallbackCollectibleFactory } from 'hooks/useApproveCallback'
import { Wrapper } from '../../components/swap/styleds'
import ButtonCTA from '../../components/ButtonCTA'
import { useActiveWeb3React } from '../../hooks'
import useI18n from '../../hooks/useI18n'
import AppBody from '../AppBody'
import useTheme from '../../hooks/useTheme'
import CopyToClipboard from '../../components/WalletModal/CopyToClipboard'
import { useCollectibleFactoryContract, useCollectibleContract } from '../../hooks/useContract'

const REAU = '0x4c79b8c9cB0BD62B047880603a9DEcf36dE28344'

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

const testimonials = [
  {
    image: '5.jpg',
    name: 'CAMPO BOM PRA CACHORRO',
    instagram: '@campobompracachorro',
    instagramLink: 'https://www.instagram.com/campobompracachorro/',
    date: '05/04/2021',
    total: 13662.0,
    thanks: 'https://www.instagram.com/p/CNVSiIvlxgM/?igshid=1fzazq17hn7x9',
    howto: 'https://www.instagram.com/stories/highlights/17899065055761227/',
    testimonial: (
      <p style={{ color: '#999' }}>
        Com a ação realizada pela{' '}
        <a className="theme-color" href="https://viralata.finance">
          viralata.finance
        </a>{' '}
        conseguimos arrecadar um valor que será destinado à compra de ração e a vacinação anual de nossos animais. Esse doação terá um impacto imenso em nosso ano, pois nos
        auxiliará nesse momento em que não podemos realizar nossos eventos de arrecadação e que nosso brechó opera on-line/presencial.
      </p>
    ),
    featured: true,
  },
  {
    image: '4.jpg',
    name: 'KAPA MOGI GUAÇU',
    instagram: '@kapakamaelprotetores',
    instagramLink: 'https://www.instagram.com/kapakamaelprotetores/',
    date: '06/04/2021',
    total: 9183.12,
    thanks: 'https://www.instagram.com/p/CNYnvvIDMU9/',
    howto: 'https://abacashi.com/p/ajude-o-kapa-kamael',
  },
  {
    image: '3.jpg',
    name: 'ELOY RABELO NETO',
    instagram: '@eloyrabeloneto',
    instagramLink: 'https://www.instagram.com/eloyrabeloneto/',
    date: '06/04/2021',
    total: 3651.92,
    thanks: 'https://www.instagram.com/p/CNOfeCljPP3/',
    howto: 'https://www.instagram.com/p/CNX9lN5jpE5/',
  },
  {
    image: '2.jpg',
    name: 'ONG SÃO LÁZARO',
    instagram: '@abrigosaolazaro',
    instagramLink: 'https://www.instagram.com/abrigosaolazaro/',
    date: '09/04/2021',
    total: 1547.0,
    thanks: 'https://twitter.com/viralatafinance/status/1382843993998905346',
    howto: 'https://www.instagram.com/stories/highlights/18006842821046515/',
  },
  {
    image: '1.jpg',
    name: 'CAARP - ABRIGO DE ANIMAIS',
    instagram: '@caarp_',
    instagramLink: 'https://instagram.com/caarp_',
    date: '11/04/2021',
    total: 1299.61,
    howto: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDMwOTIyMDYwMTY3MjUx?igshid=6lyshei28gfg',
    thanks: '',
    featured: true,
  },

  {
    image: '6.jpg',
    name: 'INSTITUTO GUARDA ANIMAL',
    instagram: '@institutoguardaanimal',
    instagramLink: 'https://www.instagram.com/institutoguardaanimal/',
    date: '04/04/2021',
    total: 33995.86,
    thanks: 'https://www.instagram.com/p/CNN6aLsBb4l/',
    howto: 'https://www.instagram.com/stories/highlights/18010328458048980/',
  },
  {
    image: '7.jpg',
    name: 'APIPA - ASSOCIAÇÃO PIAUIENSE DE PROTEÇÃO E AMOR AOS ANIMAIS',
    instagram: '@apipaoficial',
    instagramLink: 'https://www.instagram.com/apipaoficial/',
    date: '02/04/2021',
    total: 2470.0,
    thanks: 'https://www.instagram.com/p/CNLjc0rnGQR/',
    howto: 'https://www.apipapiaui.org/doe',
  },
  {
    image: '8.jpg',
    name: 'MARCINHO BELOTA',
    instagram: '@marcinhobelota',
    instagramLink: 'https://www.instagram.com/marcinhobelota/',
    date: '02/04/2021',
    total: 2000.0,
    thanks: 'https://www.instagram.com/tv/CNH9yiJpegc/',
    howto: '',
  },
  {
    image: '9.jpg',
    name: 'LAR DOS ANIMAIS GOIÂNIA',
    instagram: '@lardosanimaisgoiania',
    instagramLink: 'https://www.instagram.com/lardosanimaisgoiania/',
    date: '27/03/2021',
    total: 2500.0,
    thanks: 'https://www.youtube.com/watch?v=dV6rDd1-hps',
    howto:
      'https://l.instagram.com/?u=https%3A%2F%2Fbit.ly%2FQueroDoarLarDosAnimais&e=ATOZ2gUsrX9Q2WIBKZrJDB-QdcAcG5OnTW7_mWYO_xJXOWTnN_Lzm7K56l1JQHrz1G0tyRf3vJdvDgotf25xdtcaOzR6sjPdDd_csg&s=1',
  },
  {
    image: '14.jpg',
    name: 'ABRIGO FLORA E FAUNA',
    instagram: '@abrigofloraefauna',
    instagramLink: 'https://www.instagram.com/abrigofloraefauna/',
    date: '18/04/2021',
    total: 1199.0,
    thanks: 'https://twitter.com/viralatafinance/status/1384290709268680712',
    howto: 'https://www.instagram.com/stories/highlights/18059308147111228/',
    featured: true,
  },
  {
    image: '10.jpg',
    name: 'AGAPA',
    instagram: '@angelagomesagapa',
    instagramLink: 'https://www.instagram.com/angelagomesagapa/',
    date: '21/04/2021',
    total: 4302.62,
    thanks: 'https://www.instagram.com/angelagomesagapa/',
    howto: 'https://www.instagram.com/stories/highlights/17920591399420733/',
  },
  {
    image: '11.jpg',
    name: 'ABRIGO AMIGA DE UM AUMIGO',
    instagram: '@abrigoamigadeumaumigoof',
    instagramLink: 'https://www.instagram.com/abrigoamigadeumaumigoof/',
    date: '25/04/2021',
    total: 11396.14,
    thanks: 'https://www.instagram.com/p/COMjG5Cp-bm/',
    howto: 'https://www.instagram.com/stories/highlights/18163043998127912/',
  },
  {
    image: '12.jpg',
    name: 'JUNTOS POR CARMINHA E 40 CÃES',
    instagram: '@juntosporcarminhae40caes',
    instagramLink: 'https://www.instagram.com/juntosporcarminhae40caes/',
    date: '27/04/2021',
    total: 9643.38,
    thanks: 'https://www.instagram.com/juntosporcarminhae40caes/',
    howto: 'https://www.instagram.com/stories/highlights/17877018269143535/',
  },
  {
    image: '13.jpg',
    name: 'ABRIGO VIRA-LATA, VIRA AMOR',
    instagram: '@viralataviraamorcacoal',
    instagramLink: 'https://instagram.com/viralataviraamorcacoal',
    date: '02/05/2021',
    total: 5652.85,
    thanks: 'https://instagram.com/viralataviraamorcacoal',
    howto: 'https://www.instagram.com/p/COY47HInKfQ/?igshid=1a5r09frgdgpl',
    featured: true,
  },
  {
    image: '14.jpg',
    name: 'CASA DOS ANJOS',
    from: 'Macaé, RJ, Brazil',
    instagram: '@casadosanjos',
    total: 6785.3,
    instagramLink: 'https://www.instagram.com/casadosanjos',
    featured: true,
  },
  {
    image: '14.jpg',
    name: 'PATAS E FOCINHOS',
    from: 'Macaé, RJ, Brazil',
    instagram: '@patasfocinhos',
    total: 3281.41,
    instagramLink: 'https://www.instagram.com/patasfocinhos/',
  },
]

function useTilt(active) {
  const ref = React.useRef(null)

  React.useEffect(() => {
    if (!ref.current || !active) {
      return
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    }

    const el = ref.current

    const handleMouseMove = (e) => {
      if (el) {
        if (!state.rect) {
          state.rect = el.getBoundingClientRect()
        }
        state.mouseX = e.clientX
        state.mouseY = e.clientY

        const px = state ? (state.mouseX - state.rect.left) / state.rect.width : 0

        const py = state ? (state.mouseY - state.rect.top) / state.rect.height : 0

        el.style.setProperty('--px', px)

        el.style.setProperty('--py', py)
      }
    }

    if (el) {
      el.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (el) {
        el.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [active])

  return ref
}

const StyledButton = styled.button`
  z-index: 999;
  color: #fff;
  text-align: center;
  max-width: 1200px;
  padding: 20px;
  margin-top: 50px;
  margin-bottom: 100px;
`

function Slide({ slide, offset, onView, isDark, balance, account }) {
  const REAU_TOKEN = { address: REAU, chainId: 56, decimals: 9, name: 'Viralata Finance', symbol: 'REAU', equals: undefined, sortsBefore: undefined }

  const [approval, approveCallback] = useApproveCallbackCollectibleFactory(new TokenAmount(REAU_TOKEN, slide.price))
  const collectibleFactoryContract = useCollectibleFactoryContract(true)
  const [loading, setLoading] = useState(false)
  const [toasts, setToast] = useToasts()

  const ApproveAndBuy = async () => {
    setLoading(true)

    try {
      if (approval != ApprovalState.APPROVED) {
        await approveCallback();
      } else {
        const tx = await collectibleFactoryContract['mint'](account, account, slide.editionId, slide.priceRaw.toString())
        await tx.wait(3)

        setToast({ text: 'You have successfully bought!' })
      }
    } catch (ex) {
      setToast({ text: ex.message })
    }

    setLoading(false)
  }

  const active = offset === 0 ? true : null
  const ref = useTilt(active)

  const myStyle = {
    '--offset': offset,
    '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
    // filter: !active ? 'hue-rotate(90deg)' : 'none',
  } as React.CSSProperties

  const NFTPrice = slide.price
  const soldOut = slide.limit - slide.owners == 0
  const hasREAU = balance?.toSignificant(6) > NFTPrice

  return (
    <div ref={ref} className="slide" data-active={active} style={myStyle}>
      <div className="slideBackground" />
      <div
        onClick={() => active && onView(slide)}
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
      <ButtonCTA isDark={isDark} disabled={!account || !hasREAU || soldOut || loading} onClick={() => ApproveAndBuy()}>
        <span style={{ textTransform: 'uppercase' }}>
          {account
            ? soldOut
              ? 'SOLD OUT'
              : hasREAU
              ? approval != ApprovalState.APPROVED
                ? `APPROVE (${numeral(NFTPrice).format('0a')} REAU)`
                : `BUY (${numeral(NFTPrice).format('0a')} REAU)`
              : `insufficient balance (${numeral(NFTPrice).format('0a')} REAU)`
            : 'CONNECT WALLET'}
        </span>
        {loading && <Spinner style={{ marginLeft: 10 }} />}
      </ButtonCTA>
    </div>
  )
}

const StyledContent = styled.div`
  z-index: 999;
  color: #fff;
  text-align: center;
  max-width: 1200px;
  padding: 20px;
  margin-top: 50px;
  margin-bottom: 100px;
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
  const [confirmModalVisible, setConfirmModalVisible] = useState(false)
  const { isDark, toggleTheme, theme } = useTheme()
  const { setVisible, bindings } = useModal()
  const [loading, setLoading] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(null)
  const [slides, setSlides] = useState([])
  const isDesktop = useMediaQuery('md', { match: 'up' })
  const cContainer = isDesktop ? 'slide-container' : 'slide-container slide-container-mobile'
  const cName = isDesktop ? 'slides' : 'slides slides-mobile'
  const cWrapperName = isDesktop ? 'slides-wrapper' : 'slides-wrapper slides-wrapper-mobile'
  const cModal = isDark ? 'viralata-modal-wrapper' : 'viralata-modal-wrapper viralata-modal-wrapper-light'

  const REAU_TOKEN = { address: REAU, chainId: 56, decimals: 9, name: 'Viralata Finance', symbol: 'REAU', equals: undefined, sortsBefore: undefined }

  const [token] = useTokenBalancesWithLoadingIndicator(account, [REAU_TOKEN])

  const collectibleFactoryContract = useCollectibleFactoryContract(false)

  useEffect(() => {
    async function fetch() {
      const knownImages = ['0.jpg', '1.gif', '2.jpg', '3.gif', '4.jpg']
      const collectibleEditions: CollectibleEdition[] = []
      const slides = []
      const editionLenght: any = await collectibleFactoryContract.callStatic['getEditionsLength']()

      for (let index = 0; index < editionLenght; index++) {
        const [uri, receivers, spendable, price, startBlock, endBlock, limit]: any = await collectibleFactoryContract['editionInfo'](index)
        const owners: any = await collectibleFactoryContract['getEditionOwners'](index)
        const json = await axios.get('https://ipfs.io/ipfs/' + uri)
        collectibleEditions.push({
          uri: 'https://ipfs.io/ipfs/' + uri,
          currency: null,
          price,
          startBlock,
          endBlock,
          limit,
          owners,
        })
        slides.push({
          title: json.data.name,
          subtitle: `[${limit - owners} of ${limit}]`,
          description: ``,
          image: knownImages[index] ? `./images/${knownImages[index]}` : 'https://ipfs.io/ipfs/' + json.data.image.replace('ipfs://', ''),
          price: price / 10 ** 9,
          priceRaw: price,
          editionId: index,
          limit: limit,
          owners: owners,
        })
      }

      setSlides(slides)
    }

    fetch()
  }, [token])

  const onView = (slide) => {
    setVisible(true)
    setCurrentSlide(slide)
  }

  const initialState = {
    slideIndex: 0,
  }

  const slidesReducer = (state, event) => {
    if (event.type === 'NEXT') {
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % slides.length,
      }
    }
    if (event.type === 'PREV') {
      return {
        ...state,
        slideIndex: state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
      }
    }
  }

  const [state, dispatch] = React.useReducer(slidesReducer, initialState)

  return (
    <>
      <Modal wrapClassName={cModal} width="100%" {...bindings}>
        <Modal.Title style={{ justifyContent: 'flex-end', cursor: 'pointer' }} onClick={() => setVisible(false)}>
          X
        </Modal.Title>
        <Modal.Content style={{ margin: '0 auto' }}>{currentSlide && <img style={{ objectFit: 'contain' }} src={currentSlide.image} alt={currentSlide.title} />}</Modal.Content>
      </Modal>
      <div className={cContainer}>
        <button onClick={() => dispatch({ type: 'PREV' })}>‹</button>
        <div className={cWrapperName}>
          <div className={cName}>
            {[...slides, ...slides, ...slides].map((slide, i) => {
              let offset = slides.length + (state.slideIndex - i)
              return <Slide account={account} balance={token[REAU]} isDark={isDark} onView={onView} slide={slide} offset={offset} key={i} />
            })}
          </div>
        </div>
        <button onClick={() => dispatch({ type: 'NEXT' })}>›</button>
      </div>
      <StyledContent className={`${!isDark ? 'neon-content-light' : ''} ${!isDesktop ? 'neon-content-mobile' : ''}`}>
        <h2 className="neon-words">
          <span className="neon-words__word">Viralata + Dogira is a partnership to help NGO's in raising funds</span>
          <span className="neon-words__word">You can read more below</span>
        </h2>
        <br />
        <br />
        <h2 className="neon-words">
          <span className="neon-words__word">1. Why?</span>
          <span className="neon-block">
            Viralata Finance was inspired by the caramel coloured stray dog and the millions of other stray dogs that wander the streets of Brazil.
            <br />
            <br />
            As a community, we believe that we have the power to make a difference through community efforts and charitable donations.
            <br />
            <br />
            So far we have donated{' '}
            <b>
              R${' '}
              {testimonials
                .map((r) => r.total)
                .reduce((a, b) => a + b)
                .toLocaleString()}
            </b>{' '}
            to NGO's in Brazil.
          </span>
        </h2>
        <br />
        <br />
        <h2 className="neon-words">
          <span className="neon-words__word">2. How to contribute?</span>
          <span className="neon-block">
            When you buy a NFT you will be supporting Viralata Finance Charity Fund for NGO's. The NFT contract will distribute the amount in:
            <ul>
              <li>84% to Charity Fund Wallet</li>
              <li>10% to the artist</li>
              <li>6% to Viralata Finance for further development</li>
            </ul>
            <br />
            <div style={{ textAlign: 'center' }}>
              <span style={{ display: 'block' }}>Charity Fund Wallet</span>
              <img src={'/images/QR_CODE.png'} alt="Viralata Finance Charity Fund" />
              <br />
              <Flex mb="48px" justifyContent="center" style={{ fontSize: 18, color: isDark ? 'rgb(0,255,252)' : 'rgb(69,7,254)' }}>
                <Link
                  style={{ fontSize: 18, color: isDark ? 'rgb(0,255,252)' : 'rgb(69,7,254)', wordBreak: 'break-all' }}
                  href={`https://bscscan.com/address/0x9220557A6dDa69a1837c1B88359D55Aa6bE9A77e`}
                >
                  0x9220557A6dDa69a1837c1B88359D55Aa6bE9A77e
                </Link>
                <CopyToClipboard toCopy={'0x9220557A6dDa69a1837c1B88359D55Aa6bE9A77e'} />
              </Flex>
              <span>Artist Wallet</span>
              <Flex mb="48px" justifyContent="center" style={{ fontSize: 18, color: isDark ? 'rgb(0,255,252)' : 'rgb(69,7,254)' }}>
                <Link
                  style={{ fontSize: 18, color: isDark ? 'rgb(0,255,252)' : 'rgb(69,7,254)', wordBreak: 'break-all' }}
                  href={`https://bscscan.com/address/0xC7C2c42680bbD494302A5Be4e1312f2e7954DD4e`}
                >
                  0xC7C2c42680bbD494302A5Be4e1312f2e7954DD4e
                </Link>
                <CopyToClipboard toCopy={'0xC7C2c42680bbD494302A5Be4e1312f2e7954DD4e'} />
              </Flex>
              <span>Viralata Finance Wallet</span>
              <Flex mb="68px" justifyContent="center" style={{ fontSize: 18, color: isDark ? 'rgb(0,255,252)' : 'rgb(69,7,254)' }}>
                <Link
                  style={{ fontSize: 18, color: isDark ? 'rgb(0,255,252)' : 'rgb(69,7,254)', wordBreak: 'break-all' }}
                  href={`https://bscscan.com/address/0xE2905203e911f7f591Db51Dc9ECb8f541BCC74B3`}
                >
                  0xE2905203e911f7f591Db51Dc9ECb8f541BCC74B3
                </Link>
                <CopyToClipboard toCopy={'0xE2905203e911f7f591Db51Dc9ECb8f541BCC74B3'} />
              </Flex>
              You can also donate directly to the wallets above using BEP20 tokens.{' '}
            </div>
          </span>
        </h2>
        <br />
        <br />
        <h2 className="neon-words">
          <span className="neon-words__word">3. How are NGOs selected?</span>
          <span className="neon-block">
            We select NGOs after careful discussion and review from ourselves, as well as the team. We take in to account their history as a shelter, their size, staff, and
            reputation through a variety of methods: reviewing social media, meetings, and in some cases in person visits to verify. <br />
            First contact is usually made based off of word of mouth from our community, or through community outreach.
          </span>
        </h2>
        <br />
        <br />
        <h2 className="neon-words">
          <span className="neon-words__word">4. How are the donations used?</span>
          <span className="neon-block">
            Each NGO covers different needs. Some NGOs specifically require assistance with veterinarian bills (rescuing and rehabilitating injured or sick animals), others may
            require assistance with food, or medicine.
            <br /> In other situations, they may need assistance for building additional pens or expanding the shelter to accommodate more animals.
          </span>
        </h2>
        <br />
        <br />
        <h2 className="neon-words">
          <span className="neon-words__word">5. Who are the current list NGOs helped?</span>
          <span className="neon-block">
            <ul>
              {testimonials
                .filter((r) => r.featured === true)
                .map((t, i) => {
                  return (
                    <li key={i} style={{ marginBottom: 25 }}>
                      {t.name} <br /> <a href={t.instagramLink}>{t.instagram}</a>
                    </li>
                  )
                })}
            </ul>
          </span>
        </h2>
        <br />
        <br />
        <h2 className="neon-words">
          <span className="neon-words__word">6. Who are some previous NGOs that have been helped?</span>
          <span className="neon-block">
            <ul>
              {testimonials.map((t, i) => {
                return (
                  <li key={i} style={{ marginBottom: 25 }}>
                    {t.name} <br /> <a href={t.instagramLink}>{t.instagram}</a>
                  </li>
                )
              })}
            </ul>
          </span>
        </h2>
        <br />
        <br />
        <h2 className="neon-words">
          <span className="neon-words__word">7. Where to find more information about?</span>
          <span className="neon-block">
            You can find more information about Viralata Finance Charity Fund at <a href="https://viralata.finance">viralata.finance</a> and{' '}
            <a href="https://viralatometro.com">viralatometro.com.</a> <br /> Also you can read our document about it by{' '}
            <a href="https://drive.google.com/file/d/1bZ8wrgbQb1iS52DiSyX3igPkjesuN2LI/view?usp=sharing">clicking here.</a>
          </span>
        </h2>
      </StyledContent>
    </>
    // <>
    //   <AppBody>

    //     <DonateConfirmModal
    //       isOpen={confirmModalVisible}
    //       collectible={collectible}
    //       onConfirm={() => {
    //         setConfirmModalVisible(false)
    //       }}
    //     />
    //     <DonateCard collectible={collectible} />
    //     <ButtonCTA
    //       onClick={() => {
    //         setConfirmModalVisible(true)
    //       }}
    //     >
    //       Doar e receber meu NFT
    //     </ButtonCTA>
    //   </AppBody>
    // </>
  )
}

export default Donate
