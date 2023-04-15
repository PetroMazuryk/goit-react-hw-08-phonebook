import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`

:root {
          
          --btn-green: green;
          --btn-blue: #3371FF;
          --btn-tomato: tomato;
        }

  body {
    margin-top: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--black);

          font-weight: normal;
          font-size: 12px;
   padding-left: 100px;
    /* background-color: aqua; */
    background-color: #e9e9e9;
  }
 

  h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
          padding: 0;
        }
        img {
          display: block;
          max-width: 100%;
          height: auto;
        }
        ul {
          list-style: none;
          margin: 0;
          padding-left: 0;
        }
        a {
          text-decoration: none;
          cursor: pointer;
        }
        a:focus {
          outline: none;
        }
        button {
          display: block;
          margin: 0 auto;
          cursor: pointer;
          border: none;
        }
        button:focus {
          outline: none;
        }
        input {
         border: none;
        }
`;
