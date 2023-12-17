import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {

  /* Fonts */
  --title-Font: "Inter", sans-serif;
  --body-Font: "Montserrat", sans-serif;

  /* Colors */

  /* DARK MODE */
  --background-D: #040D12;
  --span-D: #93B1A6;
  --text-D: #C7F0E1;
  --titles-D: #255c5c;
  --letters-D: #FAFAFA;

  /* LIGHT MODE */
  --background-L: #F5F7F8;
  --span-L: #59CE8F;
  --text-Light-l: #213547;
  --text-Dark-l: #3c3c3cb3;

  /* Max-widths */
  --contaier: 200rem;
  --content-Container: 114rem;
  --container-Small: 102.4rem;
  --container-xs: 76.8rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

html {
  font-size: 62.5%;
}

body {
  font-family: var(--body-Font);
  font-size: 1.8rem;
  background-color: ${({ theme }) => theme.colors.body.background};
  transition: .4s all;
  color: var(--text-Light);
}



li {
  list-style: none;
}

a {
  display: flex;
  align-items: center;
  gap: .4rem;
  text-decoration: none;
}

button{
  background-color: ${({ theme }) => theme.colors.buttonResume.background};
  border: ${({ theme }) => theme.colors.buttonResume.border};
  padding: 1.5rem 2rem;
  color: ${({ theme }) => theme.colors.buttonResume.color};
  font-size: 1.6rem;
  cursor: pointer;
  padding: 1.5rem 2rem;
  border-radius: 0.6rem;
  font-family: var(--title-Font);
  cursor: pointer;
}

button:hover {
  background-color: ${({ theme }) => theme.colors.buttonResume.hover};
  transition:${({ theme }) => theme.colors.buttonResume.transition};
}

footer{
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 10rem;
}

::-webkit-scrollbar{
  display: none;
}
`