import styled from 'styled-components';

export const BlogContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background: var(--background-alt);

  position: relative;

`

export const BlogContent = styled.div`
  width: 100vw;
  @media(max-width: 425px) {
    position: relative;
  }

  header {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;

    padding-top: 3.4375rem;

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
  display: flex;
  flex-wrap: nowrap;
  gap: 1.5rem;
  position: relative;

  margin-left: 8.5625rem;
  padding: 2rem 0 ;
  overflow: hidden;

  @media(max-width: 425px) {
    position: unset;
    overflow-x: auto;
  }

  &::after {
    content: '';
    position: absolute;
    top: 1rem;
    bottom: 0;
    right: 0;
    width: 12rem;

    background: linear-gradient(to left, var(--white),  transparent);
    opacity: .9;

    @media(max-width: 980px) {
      width: 10rem;
    }

    @media(max-width: 767px) {
      width: 6rem;
    }

    @media(max-width: 424px) {
      width: 5rem;
    }
  }

  @media(max-width: 1315px) {
    margin-left: 4rem;
  }

  @media(max-width: 980px) {
    margin-left: 2rem;
  }

  @media(max-width: 768px) {
    margin-top: 6rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 2.5rem;
    top: 50%;
    border: none;

    background: var(--white);
    width: 3.25rem;
    height: 3.25rem;
    border-radius: 50%;
    z-index: 12;
   
    svg {
      font-size: 1.5rem;
      color: var(--green);
      transition: transform 0.5s ease-in-out;

      &.rotate {
        transform: rotate(-180deg);
      }
    }

    @media(max-width: 425px) {
      display: none;
    }

    @media(min-width: 1620px) {
      display: none;
    }
  }

`

export const Card = styled.a`
  display: flex;
  flex-direction: column;

  min-width: 21.75rem;
  max-width: 21.75rem;
  height: 28.125rem;

  padding-bottom: 2.1875rem;

  background: var(--white);
  border-radius: 0.3rem;
  overflow: hidden;

  box-shadow: 1px 4px 16px -2px rgba(0, 0, 0, 0.15);
  transition: transform 0.5s ease-in-out;

  transform: ${props => props.translate === 'yes' ? 'translateX(-110%)' : 'translateX(0)'};

  @media(max-width: 920px) {
    transform: ${props => props.translate === 'yes' ? 'translateX(-115%)' : 'translateX(0)'};
  }

  @media(max-width: 767px) {
    transform: ${props => props.translate === 'yes' ? 'translateX(-120%)' : 'translateX(0)'};
  }

  @media(max-width: 600px) {
    transform: ${props => props.translate === 'yes' ? 'translateX(-220%)' : 'translateX(0)'};
  }

  img {
    object-fit: cover;
    object-position: center;
  }
  
  div {
    padding: 2rem 1.5rem;

    h3 {
      font-size: 1.5rem;
      line-height: 2.2rem;

      margin-bottom: 1.3rem;
    }

    div {
      padding: 0;
      display: flex;
      align-items: center;
      gap: .5rem;

      img {
        height: 3.25rem;
        width: 3.25rem;
        border-radius: 50%;

        object-position: top;
      }

      p {
        font-size: 1rem;
        color: var(--text);
      }
    }
  }
`