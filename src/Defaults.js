import { createGlobalStyle } from "styled-components";

const Defaults = createGlobalStyle`
    @font-face {
      font-family: PX437;
      src: url(${require("./assets/fonts/Px437_IBM_VGA8.ttf")});
      font-weight: normal;
    }  

    :root {
      --font-primary: "PX437";

      --color-background: #2d2a2e;
      --color-text: #ffffff;
      --color-accent: #ffbf00;
      --color-accent-light: #ffd866;
      --color-grey: #4e4950;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      position: relative;
      background-color: var(--color-background);
      overflow-x: hidden;
      cursor: none;
    }

    ul {
      list-style: none;
    }

    button {
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      color: inherit;
      background-color: transparent;
      border: none;
    }

    a {
      color: inherit;
      text-decoration: none;
      cursor: none;
    }
`;

export default Defaults;
