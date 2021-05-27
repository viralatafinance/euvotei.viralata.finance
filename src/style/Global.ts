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
    font-family: "DM Sans", Helvetica, sans-serif !important;
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

.slides-mobile {
  overflow: hidden;
  width:  100% !important;
  height: auto !important;
  min-height: 55vh;
    
  .slideContent {
    padding: 5px 10px;
    width:  100% !important;
    height: auto !important;
    min-height: 55vh;
  }

  .slideSubtitle {    
    font-size: 1rem !important;
    font-weight: 900;
  }

  .slideTitle {
    font-size: 1.2rem !important;
    font-weight: 900;
  }

  > button {    
    font-size: 20px !important;
    width: 0px  !important;
  }

}
 

.slides {

  margin: 0 auto;
  width:  55vh;
  align-self: center;

  display: grid;
  > .slide {
    grid-area: 1 / -1;
  }

}

.slide-container-mobile {
  > button {    
    font-size: 25px !important;
    width: 25px  !important;
  }

}

.slide-container {
  z-index: 4;
  display: flex;
  width: 100%;
  padding: 20px 0px;

  > button {
    appearance: none;
    background: transparent;
    border: none;
    color: white;
    font-size: 5rem;
    transition: opacity 0.3s;
    opacity: 0.7;
    z-index: 5;
    width: 5rem;

    &:hover {
      opacity: 1;
    }

    &:focus {
      outline: none;
    }
  }
}

.slides-wrapper {
  flex: 1;
  justify-content: center;
}

.slideContent {
  width:  55vh;
  height: 60vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: transform 0.5s ease-in-out;
  opacity: 0.1;
  padding: 20px;
  border-radius: 10px;

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

.neon-content-mobile {
  width: 100%;

  .neon-words {
    &__word {
      font-size: 1.2rem;  
      letter-spacing: 1px;
    }
  }

  
  .neon-block {
    font-size: 1rem;
    padding: 20px;
    letter-spacing: 0px;
  }

}
.neon-content-light {
  
  .neon-words {
    &__word {
      color: #111;
      animation: none;
    }
  }

  .neon-block {

    background-color: rgba(255,255,255,0.25);
    color: #111;

    a {
      color: rgb(69,7,254);
    }
    
    ul { 
      color: #111;
  
      li {       
        color: #111;
      }
      
      li:before {
        color: #111;
    }
  }

  }
}

.neon-words {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  &__word {
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.8rem;
    color: #c6e2ff;
    animation: neon 1s ease-in-out infinite alternate;    
    margin-bottom: 20px;    
    letter-spacing: 2px;
    
    &__small {
      font-size: 1.2rem;
      text-align: center;
      line-height: 1.5rem;
      color: #c6e2ff;
      animation: neon 1s ease-in-out infinite alternate;    
      margin-bottom: 20px;    
      letter-spacing: 2px;
    }
  }


}

.viralata-modal-wrapper {
  background-color: transparent !important;
  h2 {
    font-size: 40px !important;
    color: rgb(0,255,252) !important;
  }
}


.viralata-modal-wrapper-light {
  h2 {
    color: rgb(234 250 21) !important;
  }
}

.neon-block {
  color: #c6e2ff;
  text-align: left;
  text-transform: none;
  font-size: 24px;
  padding: 40px;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  letter-spacing: 1px;
  // box-shadow: 0px 0px 5px 3px #0ff;

  a {
    color: rgb(0,255,252);
  }
  

  ul {
    color: #c6e2ff;

    li {      
      color: #c6e2ff;  
      
    }
    
    li:before {
      content: '–';
      display: inline-block;
      color: #c6e2ff;  
      margin-left: -1.5rem;
    }
}
/*-- Animation Keyframes --*/

// animation

@keyframes neon {
  from {
    text-shadow:
    0 0 1px rgba(202,228,225,0.92),
    0 0 8px rgba(202,228,225,0.34),
    0 0 2px rgba(30,132,242,0.52),
    0 0 1px rgba(30,132,242,0.72),
    0 0 34px rgba(30,132,242,0.78),
    0 0 19px rgba(30,132,242,0.72);
  }
  to {
    text-shadow:
    0 0 1px rgba(202,228,225,0.98),
    0 0 8px rgba(202,228,225,0.42),
    0 0 2px rgba(30,132,242,0.58),
    0 0 2px rgba(30,132,242,0.74),
    0 0 38px rgba(30,132,242,0.88),
    0 0 15px rgba(30,132,242,0.9);
  }
}

@keyframes neon2 {
  from {
    text-shadow:
    0 0 5px rgba(202,228,225,0.92),
    0 0 28px rgba(202,228,225,0.34),
    0 0 12px rgba(30,132,242,0.52),
    0 0 21px rgba(30,132,242,0.72),
    0 0 34px rgba(30,132,242,0.78),
    0 0 49px rgba(30,132,242,0.72);
  }
  to {
    text-shadow:
    0 0 5px rgba(202,228,225,0.98),
    0 0 28px rgba(202,228,225,0.42),
    0 0 12px rgba(30,132,242,0.58),
    0 0 22px rgba(30,132,242,0.74),
    0 0 38px rgba(30,132,242,0.88),
    0 0 55px rgba(30,132,242,0.9);
  }
}






`

export default GlobalStyle
