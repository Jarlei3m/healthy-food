import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  :root {
    --white: #ffffff;
    --green: #BADC58;
    --title: #1D164D;
    --text: #9E9BAF;
    --text-alt: #BCBCBC;

    --placeholder: #B4B4B4;
    --blue: #2D3561;

    --background-alt: #FAFAFC;
  }

  body {
    background: var(--white);

    color: var(--title);

    height: 100%;
    margin: 0;
    overflow-x: hidden;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 87.5%;
    }
  }

  @media (max-width: 980px) {
    html {
      font-size: 81.25%;
    }
  }

  @media (max-width: 920px) {
    html {
      font-size: 75%;
    }
  }


  @media (max-width: 820px) {
    html {
      font-size: 68.75%;
    }
  }


  @media (max-width: 685px) {
    html {
      font-size: 62.5%;
    }
  }


  body,
  input,
  textarea,
  button {
    font-family: 'Muli', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1,
  h2,
  h3 {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: var(--title);
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, .8);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 30;
  }
  
  .react-modal-content {
    width: 100%;
    max-width: 45.625rem;
    background: var(--background-alt);
    position: relative;
    border-radius: .5rem;
    padding: 4rem;
  }
`