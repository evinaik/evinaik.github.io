import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { SEO } from "../components/seo/seo";
import { Header } from "../components/layout/Header";

const GlobalStyles = createGlobalStyle`
  html {
    --purple: hsl(240, 100%, 80%);
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 600px;
  padding: 0;
  font-family: "SF Mono Regular", "Source Code Pro", "Inconsolata", "Monaco",
    monospace;
  font-size: 12px;
`;

const HR = styled.hr`
  border-color: var(--purple);
  border-radius: 20px;
  filter: brightness(2);
  width: 100%;
`;

const Article = styled.article`
  color: #555;
  font-size: 1.2em;
  line-height: 1.9em;
`;

interface Props {
  children: JSX.Element;
}

export function Layout({ children }: Props) {
  return (
    <>
      <GlobalStyles />
      <SEO
        description="Ekansh Vinaik's personal website."
        title="Ekansh Vinaik"
      />
      <Main>
        <Header />
        <HR />
        <Article>{children}</Article>
      </Main>
    </>
  );
}
