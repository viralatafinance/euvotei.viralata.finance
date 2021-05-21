/* eslint-disable */
import React, { useContext, useState } from 'react'
import { Text, useMediaQuery } from '@geist-ui/react'
import Tilt from 'react-tilt'
import styled from 'styled-components'
import { Wrapper } from '../../components/swap/styleds'
import ButtonCTA from '../../components/ButtonCTA'
import { useActiveWeb3React } from '../../hooks'
import useI18n from '../../hooks/useI18n'
import AppBody from '../AppBody'
import DonateCard from './components/DonateCard'
import { useCollectibleEditions } from '../../data/Collectibles'
import DonateConfirmModal from './components/DonateConfirmModal'
import useTheme from '../../hooks/useTheme'

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

const slides = [
  {
    title: 'Viralata + Dogira',
    subtitle: 'NFT Collection',
    description: 'soon',
    image: './images/NFT-PREV1.jpg',
  },
  {
    title: 'Viralata + Dogira',
    subtitle: 'NFT Collection',
    description: 'soon',
    image: './images/NFT-PREV2.jpg',
  },
  {
    title: 'Viralata + Dogira',
    subtitle: 'NFT Collection',
    description: 'soon',
    image: './images/NFT-PREV3.jpg',
  },
  {
    title: 'Viralata + Dogira',
    subtitle: 'NFT Collection',
    description: 'soon',
    image: './images/NFT-PREV4.jpg',
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

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null
  const ref = useTilt(active)

  const myStyle = {
    '--offset': offset,
    '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
    // filter: !active ? 'hue-rotate(90deg)' : 'none',
  } as React.CSSProperties

  return (
    <div ref={ref} className="slide" data-active={active} style={myStyle}>
      <div className="slideBackground" />
      <div
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
  },
]

const Donate = () => {
  const TranslateString = useI18n()

  const { account } = useActiveWeb3React()
  const collectible = useCollectibleEditions()
  const [confirmModalVisible, setConfirmModalVisible] = useState(false)
  const [state, dispatch] = React.useReducer(slidesReducer, initialState)
  const isDesktop = useMediaQuery('md', { match: 'up' })
  const cName = isDesktop ? 'slides' : 'slides slides-mobile'
  const cWrapperName = isDesktop ? 'slides-wrapper' : 'slides-wrapper slides-wrapper-mobile'
  const { isDark, toggleTheme, theme } = useTheme()

  return (
    <>
      <div className={'slide-container'}>
        <button onClick={() => dispatch({ type: 'PREV' })}>‹</button>
        <div className={cWrapperName}>
          <div className={cName}>
            {[...slides, ...slides, ...slides].map((slide, i) => {
              let offset = slides.length + (state.slideIndex - i)
              return <Slide slide={slide} offset={offset} key={i} />
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
            Charity Fund Wallet <br /> <a href="https://bscscan.com/address/0x9220557A6dDa69a1837c1B88359D55Aa6bE9A77e">0x9220557A6dDa69a1837c1B88359D55Aa6bE9A77e</a> <br />
            <br />
            Artist Wallet <br /> <a href="https://bscscan.com/address/">-</a> <br />
            <br />
            Viralata Finance Wallet <br /> <a href="https://bscscan.com/address/0xE2905203e911f7f591Db51Dc9ECb8f541BCC74B3">0xE2905203e911f7f591Db51Dc9ECb8f541BCC74B3</a> <br />
            <br />
            <br />
            You can also donate directly to the wallets above using BEP20 tokens.
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
          <span className="neon-words__word">5. Who are some previous NGOs that have been helped?</span>
          <span className="neon-block">
            <ul>
              {testimonials.map((t, i) => {
                return <li key={i}>{t.name}</li>
              })}
            </ul>
          </span>
        </h2>
        <br />
        <br />
        <h2 className="neon-words">
          <span className="neon-words__word">6. Where to find more information about?</span>
          <span className="neon-block">
            You can find more information about Viralata Finance Charity Fund at <a href="https://viralata.finance">viralata.finance</a> and{' '}
            <a href="https://viralatometro.com">viralatometro.com.</a> <br /> Also you can read our document about it by <a href="https://drive.google.com/file/d/1bZ8wrgbQb1iS52DiSyX3igPkjesuN2LI/view?usp=sharing">clicking here.</a>
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
