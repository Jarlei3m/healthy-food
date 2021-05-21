import styled from 'styled-components';

export const BestRecipesContainer = styled.section`
  width: 100vw;
  /* height: 48rem; */
  height: 100vh;
  background: var(--background-alt);
`

export const BestRecipesContent = styled.div`
  width: 100vw;
  margin: 0 auto;
  padding: 0 8.5625rem;

  @media(max-width: 1315px) {
    padding: 0 4rem;
  }

  @media(max-width: 980px) {
    padding: 0 2rem;
  }

  header {
    display: flex;
    align-items: center;
    flex-direction: column;

    padding-top: 3.4375rem;
    padding-bottom: 2.1875rem;

    h1 {
      font-size: 2rem;
      line-height: 1.9rem;

      margin-bottom: 1rem;
    }

    p {
      max-width: 30.125rem;

      font-size: 1rem;
      line-height: 1.5rem;
      color: var(--text);
      text-align: center;
    }
  }
`

export const CardsContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.25rem;

  @media(max-width: 685px) {
    gap: 1.5rem;
  }

  @media(max-width: 554px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  width: 100%;
  max-width: 33rem;
  height: 14.0625rem;
  /* height: auto; */

  background: var(--white);
  border-radius: 0.3rem;

  box-shadow: 1px 8px 26px rgba(0, 0, 0, 0.1);
  
  img {
    max-width: 15.8125rem;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
  
  div {
    padding: 0 2rem;

    @media(max-width: 685px) {
      padding: 0 1rem;
    }

    h3 {
      font-size: 1.5rem;
      line-height: 2.2rem;

      margin-bottom: 1.3rem;
    }

    button {
      border: none;
      background: var(--green);
      border-radius: 0.3rem;

      color: var(--white);

      width: 8.735rem;
      height: 3rem;

      transition: filter .2s ease;

      &:hover {
        filter: brightness(.9)
      }

      @media(max-width: 685px) {
        width: 8rem;
        height: 2.8rem;
      }
    }
  }
`