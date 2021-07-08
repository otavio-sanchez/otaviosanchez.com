import { createGlobalStyle } from 'styled-components';

const Fonts = createGlobalStyle`
@font-face {
  font-family: "PlexusSans-Bold";
  src: url("/fonts/PlexusSans-Bold.otf");
  font-style: bold;
  font-weight: 800;
  font-display: swap;
}

@font-face {
  font-family: "PlexusSans-ExtraLight";
  src: url("/fonts/PlexusSans-ExtraLight.otf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: "PlexusSans-Regular";
  src: url("/fonts/PlexusSans-Regular.otf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
`;

export default Fonts;
