import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    // background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }

    & .tooltip-content {
      z-index: 999999 !important;
    }
  }

  html,
  button,
  input,
  select,
  textarea {
    font-family: "Source Sans Pro", Helvetica, sans-serif !important;
  }

  .backdrop {
    background-color: rgba(0,0,0,0.8);
  }
  .currencies-modal {
    padding: 0px !important;
  }

  .viralata-modal {
    color: #fff !important;
    background-color: #000 !important;
    border: 1px solid #4bf2cd
  }

  
.slides {

  flex: 1;
  align-self: center;

  display: grid;
  > .slide {
    grid-area: 1 / -1;
  }

  > button {
    appearance: none;
    background: transparent;
    border: none;
    color: white;
    position: absolute;
    font-size: 5rem;
    width: 5rem;
    height: 5rem;
    top: 47%;
    transition: opacity 0.3s;
    opacity: 0.7;
    z-index: 5;

    &:hover {
      opacity: 1;
    }

    &:focus {
      outline: none;
    }

    &:first-child {
      left: 5px;
    }
    &:last-child {
      right:  5px;
    }
  }
}

.slide {
  //transform-style: preserve-3d;
  // border: solid 1px red;

  // &[data-active] {
  //   .slideContent > * {
  //     transform: none;
  //     opacity: 1;
  //   }
  // }
}

.slideContent {
  width:  45vh;
  height: 60vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: transform 0.5s ease-in-out;
  opacity: 0.5;
  padding: 20px;
  border-radius: 10px;
  --filter: hue-rotate(250deg);

  display: grid;
  align-content: flex-end;

  transform-style: preserve-3d;
  transform: perspective(1000px) translateX(calc(100% * var(--offset)))
    rotateY(calc(-45deg * var(--dir)));
}

.slideContentInner {
  transform-style: preserve-3d;
  transform: translateZ(2rem);
  transition: opacity 0.3s linear;
  text-shadow: 0 0.1rem 1rem #000;
  opacity: 0;
  color: #fff;
  text-align: right;
  padding: 10px;

  .slideSubtitle,
  .slideTitle {
    font-size: 2rem;
    font-weight: normal;
    letter-spacing: 0.2ch;
    text-transform: uppercase;
    margin: 0;
  }

  
  .slideSubtitle {
    font-size: 1rem;

    
  }

  .slideDescription {
    margin: 0;
    font-size: 0.8rem;
    letter-spacing: 0.2ch;
  }
}

.slideBackground {
  position: fixed;
  top: 0;
  left: -10%;
  right: -10%;
  bottom: 0;
  background-size: cover;
  background-position: center center;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s linear, transform 0.3s ease-in-out;
  pointer-events: none;

  transform: translateX(calc(10% * var(--dir)));
}

.slide[data-active] {
  z-index: 2;
  pointer-events: auto;

  .slideBackground {
    opacity: 0.2;
    transform: none;
  }

  .slideContentInner {
    opacity: 1;
  }

  .slideContent {
    --x: calc(var(--px) - 0.5);
    --y: calc(var(--py) - 0.5);
    opacity: 1;

    transform: perspective(1000px);

    &:hover {
      transition: none;
      transform: perspective(1000px) rotateY(calc(var(--x) * 45deg))
        rotateX(calc(var(--y) * -45deg));
    }
  }
}


`

export default GlobalStyle
