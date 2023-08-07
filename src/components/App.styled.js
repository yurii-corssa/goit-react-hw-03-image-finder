import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
  --app-container: #f3f6fd;
  /* --app-container: #111827; */
  --main-color: #1f1c2e;
  /* --secondary-color: #4A4A4A; */
  /* --link-color: #1f1c2e; */
  /* --link-color-hover: #c3cff4; */
  /* --link-color-active: #fff; */
  /* --link-color-active-bg: #1f1c2e; */
  /* --projects-section: #fff; */
  /* --message-box-hover: #fafcff; */
  /* --message-box-border: #e9ebf0; */
  /* --more-list-bg: #fff; */
  /* --more-list-bg-hover:  #f6fbff; */
  /* --more-list-shadow: rgba(209, 209, 209, 0.4); */
  /* --button-bg: #1f1c24; */
  --search-area-bg: #fff;
  /* --star: #1ff1c2e; */
  /* --message-btn: #fff; */
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Exo 2', sans-serif;
    font-size: 14px;
    display: flex;
    justify-content: center;
    background-color: var(--app-container);
}

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul,
ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

img{
  display: block;
  width: 100%;
}

`;

export const Section = styled.div`
  width: 1400px;
  padding: 0 15px;
`;

export const Header = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 0;
  margin-bottom: 10px;
  background-color: var(--app-container);
`;
