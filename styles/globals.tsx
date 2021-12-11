import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family:  PlexusSans-Regular, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  overflow-x: hidden;
}

a {
  color: #FC780B;
  font-family: PlexusSans-Regular;
  transition: opacity 0.8s;
}

a:hover {
  opacity: 0.5;
  color: #FC780B;
}

* {
  box-sizing: border-box;
}
`;

export default Globals;
