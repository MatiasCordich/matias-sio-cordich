import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  /* Fonts */
  --title-Font: "Inter", sans-serif;
  --body-Font: "Montserrat", sans-serif;

  /* Colors */
  --body-Color: #0a192f;
  --text-Green: #64ffda;
  --text-Light: #ccd6f6;
  --text-Dark: #8892b0;

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
  background: var(--body-Color);
  color: var(--text-Light);
}



li {
  list-style: none;
}

a {
  text-decoration: none;
}

button{
  background-color: transparent;
  border: 1px solid var(--text-Green);
  padding: 1.5rem 2rem;
  color: var(--text-Green);
  font-size: 1.6rem;
  cursor: pointer;
  padding: 1.5rem 2rem;
  border-radius: 0.6rem;
  font-family: var(--title-Font);
  cursor: pointer;
}

button:hover {
  background-color: #64ffdb4f;
  transition: all 0.8s;
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