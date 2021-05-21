import styled from 'styled-components';

export const RegisterContainer = styled.form`

  h1 {
    font-size: 2rem;
    color: var(--title);
  }

  fieldset {
    margin-top: 3rem;
    border: 0;
  }

  legend {
    margin-bottom: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    h2 {
      font-size: 1.3rem;
      color: var(--title);
    }

  }

  .field-group {
    display: flex;

    div {
      flex: 1;

      display: flex;
      flex-direction: column;

      margin-bottom: 1.4rem;

      & + div {
        margin-left: 1.4rem;
      }
    }


    input, select {
      background-color: #f0f0f5;

      border: 1px solid var(--blue);
      padding: 1rem 1.5rem;
      border-radius: .5rem;

      font-size: 1rem;
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    label {
      font-size: 0.875rem;
      margin-bottom: .5rem;

    }    
  }
  
  .btns {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1.5rem;

    button {
      width: 16.25rem;
      height: 3.5rem;

      background-color: var(--green);
      border-radius: .3rem;

      color: var(--white);
      font-weight: bold;
      font-size: 1rem;

      border: 0;

      margin-top: 2rem;
      transition: filter .2s ease;

      &:hover {
        filter: brightness(.9);
      }
    }

    button:nth-child(2) {
      background: #C7283A;
    }
  }
  

`