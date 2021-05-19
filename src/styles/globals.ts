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

}

body {
  /* background-color: var(--gray-900);
  color: var(--white); */

  height: 100%;
  margin: 0;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body,
input,
textarea,
button {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

h1,
h2,
h3 {
  margin: 0;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`