/* eslint-disable */
import React, { useContext, useState } from 'react'
import { Text, useMediaQuery } from '@geist-ui/react'
import Tilt from 'react-tilt'
import styled, { ThemeContext } from 'styled-components'
import { Wrapper } from '../../components/swap/styleds'
import ButtonCTA from '../../components/ButtonCTA'
import { useActiveWeb3React } from '../../hooks'
import useI18n from '../../hooks/useI18n'
import AppBody from '../AppBody'
import DonateCard from './components/DonateCard'
import { useCollectibleEditions } from '../../data/Collectibles'
import DonateConfirmModal from './components/DonateConfirmModal'

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

const Donate = () => {
  const TranslateString = useI18n()
  const theme = useContext(ThemeContext)

  const { account } = useActiveWeb3React()
  const collectible = useCollectibleEditions()
  const [confirmModalVisible, setConfirmModalVisible] = useState(false)
  const [state, dispatch] = React.useReducer(slidesReducer, initialState)
  const isDesktop = useMediaQuery('md', { match: 'up' })
  const cName = isDesktop ? 'slides' : 'slides slides-mobile'
  const cWrapperName = isDesktop ? 'slides-wrapper' : 'slides-wrapper slides-wrapper-mobile'

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
      <div style={{ zIndex: 999, color: '#fff', textAlign: 'center', maxWidth: 1200, padding: 20, marginTop: 50 }}>
        <h2 className="neon-words" style={{ fontSize: 22, fontWeight: 300 }}>
          <span className="neon-words__word">Viralata + Dogira is a partnership to help NGO's in raising funds.</span>
          <span className="neon-words__word">You can read more below.</span>
        </h2>
      </div>

      <div style={{ zIndex: 999, color: '#fff', textAlign: 'center', width: '100%', maxWidth: 1200, padding: 40, margin: '0px 0px 100px 0px', backgroundColor: 'rgba(0,0,0,0.5)', boxShadow: '0px 0px 5px 3px #0ff;' }}>
        <h2>Viralata Finance Charity Fund</h2>

        <p>
          The charity fund is a wallet on the blockchain to receive donations in $REAU in the name of Viralata Finance and transfer the funds to partner animal shelter (NGOs)
          monthly to create a relationship with it.
        </p>

        <p>You can check the balance and all transactions in this portfolio directly at BSCscan by clicking here and also on the Viralatômetro.</p>
        <p>Viralata Finance</p>
        <p>0x9220557A6dDa69a1837c1B88359D55Aa6bE9A77e</p>
        <p>How transfers will be made to NGOs?</p>

        <p>
          Monthly transfer to the partner NGOs from the Charity Fund: on the last day of the month, starting on May 31 2021, 20% of the total charity fund will be exchanged from
          $REAUs into a stable token and sent to partner NGOs, making an equal division among them; Remaining fund - Remaining 80% will remain in the fund in order to generate
          progressive growth, as if it were a second income-generating black hole for the charity fund; Stimulating growth - the final idea is that only the proceeds of the fund
          are used for donations, in order to stimulate its progressive growth and help more and more NGOs; Read more about it by clicking here.
        </p>
      </div>
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
