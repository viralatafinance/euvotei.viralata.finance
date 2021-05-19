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
  font-family: Source Sans Pro, Helvetica, sans-serif;
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
    subtitle: 'Exclusive NFT Collection',
    description: '1/50',
    image: './images/placeholder.jpg',
  },
  {
    title: 'Viralata + Dogira',
    subtitle: 'Exclusive NFT Collection',
    description: '1/50',
    image: './images/placeholder.jpg',
  },
  {
    title: 'Viralata + Dogira',
    subtitle: 'Exclusive NFT Collection',
    description: '1/50',
    image: './images/placeholder.jpg',
  },
  {
    title: 'Viralata + Dogira',
    subtitle: 'Exclusive NFT Collection',
    description: '1/50',
    image: './images/placeholder.jpg',
  },
  {
    title: 'Viralata + Dogira',
    subtitle: 'Exclusive NFT Collection',
    description: '1/50',
    image: './images/placeholder.jpg',
  },
  {
    title: 'Viralata + Dogira',
    subtitle: 'Exclusive NFT Collection',
    description: '1/50',
    image: './images/placeholder.jpg',
  },
  {
    title: 'Viralata + Dogira',
    subtitle: 'Exclusive NFT Collection',
    description: '1/50',
    image: './images/placeholder.jpg',
  },
  {
    title: 'Viralata + Dogira',
    subtitle: 'Exclusive NFT Collection',
    description: '1/50',
    image: './images/placeholder.jpg',
  },
  {
    title: 'Viralata + Dogira',
    subtitle: 'Exclusive NFT Collection',
    description: '1/50',
    image: './images/placeholder.jpg',
  },
  {
    title: 'Viralata + Dogira',
    subtitle: 'Exclusive NFT Collection',
    description: '1/50',
    image: './images/placeholder.jpg',
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
    filter: !active ? 'hue-rotate(90deg)' : 'none',
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
  const cName = isDesktop ? 'slides' : 'slides slides-mobile';

  return (
    <div style={{ zIndex: 4, flex: 1, display: 'flex' }}>
      <div className={cName}>
        <button onClick={() => dispatch({ type: 'PREV' })}>‹</button>

        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i)
          return <Slide slide={slide} offset={offset} key={i} />
        })}
        <button onClick={() => dispatch({ type: 'NEXT' })}>›</button>
      </div>
    </div>

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
