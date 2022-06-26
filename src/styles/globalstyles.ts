import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  html,
  body {
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.bgDefault};
    height: 100vh;
    width: 100vh;

    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;
