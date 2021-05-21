import styled from 'styled-components';

export const HeroContainer = styled.section `
  width: 100vw;
  /* height: 48rem; */
  height: 100vh;
  position: relative;
  overflow: hidden;
  /* margin-top: -6.4375rem; */
`

export const HeroContent = styled.section `
  max-width: 100vw;
  height: 100%;
  margin: 0 auto;
  padding-left: 8.5625rem;
  display: flex;
  align-items: center;

  @media(max-width: 1315px) {
    padding-left: 4rem;
  }

  @media(max-width: 980px) {
    padding-left: 2rem;
  }

  /* justify-content: space-between; */
  
  article {
    margin-top: -6.4375rem;

    @media(max-width: 1165px) {
      margin-top: -12rem;
    }

    @media(max-width: 1080px) {
      margin-bottom: 4rem;
    }

    h1 {
      font-size: 3rem;
      line-height: 4.3rem;
      margin-bottom: 1.4rem;
      max-width: 25rem;


      @media(max-width: 1240px) {
        font-size: 2.8rem;
        line-height: 3.8rem;
        margin-bottom: 1.1rem;
        max-width: 23rem;
      }

      @media(max-width: 899px) {
        max-width: 28rem;
      }

      @media(max-width: 580px) {
        max-width: 25rem;
      }
    }

    div {
      display: flex;
      align-items: center;
      height: 3.25rem;

      gap: 1rem;

      input {
        height: 100%;
        width: 21.43rem;
        padding: 0.2rem 1rem;

        color: var(--placeholder);
        font-size: 1rem;
        line-height: 1rem;
        border: 1px solid var(--blue);
        border-radius: 0.3rem;

        @media(max-width: 1240px) {
          max-width: 18.7rem;
        }

        @media(max-width: 1115px) {
          max-width: 17rem;
        }

        @media(max-width: 980px) {
          max-width: 21.43rem;
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        
        /* width: 24.6875rem; */
        height: 100%;
        width: 3.25rem;

        border: none;
        border-radius: 0.3rem;
        background: var(--green);

        transition: filter .2s ease;

        svg {
          color: var(--white);
          font-size: 1.5rem;          
        }

        &:hover {
          filter: brightness(.9);
        }
      }
    }
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 1.5rem;

    @media(max-width: 1165px) {
      /* height: 90%; */
      transform: translateX(10%);
    }

    @media(max-width: 1080px) {
      /* height: 87%; */
      /* transform: translateX(20%); */
    }

    @media(max-width: 1024px) {
      /* height: 80%; */
      transform: translateX(15%);
    }

    @media(max-width: 980px) {
      /* display: none; */
      transform: translateX(18%);
    }

    @media(max-width: 899px) {
      /* height: 60%; */
      transform: translateX(45%);

    }

    @media(max-width: 745px) {
      transform: translateX(50%);
    }

    @media(max-width: 580px) {
      transform: translateX(70%);
    }

    @media(max-width: 424px) {
      transform: translateX(75%);
    }

    @media(max-width: 374px) {
      transform: translateX(81%);
    }

  }
` 

export const HeaderContent = styled.header`
  /* max-width: 109rem; */
  /* width: 100%; */
  max-width: 100vw;
  height: 6.4375rem;
  margin: 0 auto;
  padding: 0 8.5625rem;

  display: flex;
  align-items: center;
  justify-content: space-between;


  @media(max-width: 1315px) {
    padding: 0 4rem;
  }

  @media(max-width: 980px) {
    padding: 0 2rem;
  }
  
  h1 {
    font-size: 2rem;
    color: var(--green);

    @media(max-width: 580px) {
      white-space: nowrap;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 2rem;

    @media(max-width: 685px) {
      gap: 1rem;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 2rem;
      z-index: 5;

      @media(max-width: 685px) {
        gap: 1rem;
      }

      a {
        text-transform: uppercase;
        color: var(--white);
        font-size: 1rem;
        line-height: .8rem;
        font-weight: bold;

        @media(max-width: 425px) {
          white-space: nowrap;
        }
      }
    }

    button {
      height: 3.25rem;
      width: 8.25rem;
      border: none;
      background: var(--white);
      border-radius: .3rem;
      color: var(--green);
      text-transform: uppercase;
      z-index: 5;

      transition: all .2s ease;
      
      &:hover {
        background: var(--green);
        color: var(--white);
      }


      font-size: 1rem;
      font-family: 'Muli';
      font-weight: bold;
    }
  }

  /* navbar */

  .navMenu {
    position: fixed;
    right: 2rem;
    top: 2.5rem;

    z-index: 20;

    div {
      height: 2px;
      width: 2rem;
      margin-bottom: 4px;

      background-color: var(--blue);
      transition: all 0.5s ease-in-out;
    }

    &.close {
      div:nth-child(1) {
        transform: translate(0px, 8px) rotate(45deg);
        background-color: var(--white);
      }

      div:nth-child(2) {
        opacity: 0;
      }

      div:nth-child(3) {
        transform: translate(0px, -4px) rotate(-45deg);
        background-color: var(--white);
      }
    }
  }

  /* menu modal */
  .menuModal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .8);
    opacity: 0;

    transform: translateY(-100%);
    transition: all 0.5s ease-out;

    z-index: 15;

    &.opened {
      opacity: .9;
      transform: translateY(0);
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      gap: 6rem;

      width: 100%;
      height: 100%;

      a {
        font-size: 2rem;
      }

      button {
        height: 5rem;
        font-size: 1.4rem;
        width: 17rem;
      }
    }
  }

`