import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100vw;
  height: 6.4375rem;
`

export const FooterContent = styled.div`
  max-width: 100vw;
  height: 100%;
  margin: 0 auto;

  padding: 0 8.5625rem;

  @media(max-width: 1315px) {
    padding: 0 4rem;
  }

  @media(max-width: 980px) {
    padding: 0 2rem;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 2.1875rem;

    a {
      color: var(--text);
    }
  }

`