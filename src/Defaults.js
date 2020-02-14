import { createGlobalStyle } from "styled-components";

const Defaults = createGlobalStyle`
    @font-face {
      font-family: PX437;
      src: url(${require("./assets/fonts/Px437_IBM_VGA8.ttf")});
      font-weight: normal;
    }  

    :root {
      --font-primary: "PX437";

    //   --color-background: #101223;
    //   --color-background: #000000;
      --color-background: #2d2a2e;
      --color-element-dark: #181a34;
      --color-element-light: #202346;
      --color-navbar: #181a34;
      --color-text: #b9bcdf;
      --color-navbar-text: #b9bcdf;
      --color-accent-main: #858ac7;
      --color-shimmer-bg: #303569;
      --color-shimmer-shine: #40478c;
      --color-accent-pending: #f7bb18;
      --color-accent-processed: #bf18f7;
      --color-accent-collected: #40b11b;
      --color-accent-stock: #184ff7;
      --color-warning: #b11b1b;
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
