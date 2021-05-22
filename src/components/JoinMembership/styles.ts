import styled from 'styled-components';

export const JoinMembershipContainer = styled.section `
  width: 100vw;
  position: relative;

  overflow-x: hidden;
`

export const JoinMembershipContent = styled.section `
  max-width: 100vw;
  height: calc(100vh - 6.4375rem);
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

  div {
    z-index: 10;
    @media(max-width: 1240px) {
      max-width: 30rem;
    }

    @media(max-width: 1165px) {
      max-width: 25rem;
    }

    @media(max-width: 864px) {
      max-width: 33rem;
      margin-top: auto;
      margin-bottom: 1.7rem;
    }

    @media(max-width: 580px) {
      max-width: 25rem;
      margin-top: 4rem;
    }

    h1 {
      color: var(--blue);
      font-size: 3rem;
      line-height: 4rem;
      margin-bottom: 2rem;
    }

    form {
      max-width: 28.3125rem;
      height: 3.25rem;

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;

      input {
        height: 3.25rem;
        width: 21.5rem;
        padding: 0.2rem 1rem;

        color: var(--placeholder);
        font-size: 1rem;
        line-height: 1rem;
        border: 1px solid #707070;
        border-radius: 0.3rem;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        
        height: 3.375rem;
        width: 5.8125rem;

        border: none;
        border-radius: 0.3rem;
        background: var(--green);

        color: var(--white);
        font-size: 1rem;

        box-shadow: 0px 12px 25px -8px rgba(186, 220, 88, .5);

        transition: filter .2s ease;

        &:hover {
          filter: brightness(.9)
        }
      }
    }
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    height: 100%;

    @media(max-width: 745px) {
      transform: translateX(13%);
    }

    @media(max-width: 685px) {
      transform: translateX(15%);
    }

    @media(max-width: 580px) {
      transform: translateX(70%);
    }

    @media(max-width: 424px) {
      transform: translateX(75%);
    }

    @media(max-width: 374px) {
      transform: translateX(70%);
    }
  }
` 