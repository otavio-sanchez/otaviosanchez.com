import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
  font-weight: bold;
}

* {
  box-sizing: border-box;
}
`;

export default Globals;
