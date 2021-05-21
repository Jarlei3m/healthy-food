import styled from 'styled-components';

export const BestServicesContainer = styled.section`
  width: 100vw;
  /* height: 45.4375rem; */
  height: 100vh;
  position: relative;
  overflow-x: hidden;
`

export const BestServicesContent = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  padding-right: 8.5625rem;
  height: 100%;
  
  display: flex;
  align-items: center;

  /* @media(max-width: 1080px) {
    justify-content: flex-end;
  } */

  @media(max-width: 1165px) {
    padding-right: 4rem;
    justify-content: flex-end;
  }

  @media(max-width: 980px) {
    padding-right: 2rem;
  }

  img {
    height: 100%;

    @media(max-width: 1165px) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
    }

    @media(max-width: 860px) {
      transform: translateX(-10%);
    }

    @media(max-width: 745px) {
      transform: translateX(-20%);
    }

    @media(max-width: 745px) {
      transform: translateX(-28%);
    }

    @media(max-width: 580px) {
      transform: translateX(-52%);
    }
  }


  div {
    max-width: 25.5rem;
    width: 100%;

    z-index: 10;

    @media(max-width: 424px) {
      max-width: 22rem;
    }

    @media(max-width: 374px) {
      max-width: 17rem;
    }

    h1 {
      font-size: 2rem;
      line-height: 2.5rem;
      color: var(--blue);
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
      color: var(--text-alt);

      margin: 2rem 0 3.375rem;
    }

    button {
      border: none;
      background: var(--green);
      border-radius: 0.3rem;

      color: var(--white);

      font-size: 1rem;
      line-height: 0.75rem;

      
      width: 9.375rem;
      height: 3.4375rem;
      
      box-shadow: 0px 17px 25px -4px rgb(186, 220, 88, .5);

      transition: filter .2s ease;

      &:hover {
        filter: brightness(.9)
      }
    }
  }
`