import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import * as React from "react";
import styled from "styled-components";
import { SEO } from "../components/seo/seo";

dayjs.extend(relativeTime);

interface Frontmatter {
  date: Date;
  title: string;
}

interface Props {
  children: JSX.Element;
  pageContext: {
    frontmatter: Frontmatter;
  };
}

const Title = styled.h1`
  margin-bottom: 0;
`;

const Metadata = styled.p`
  color: #99f;
  font-size: 0.8em;
  margin: 0;
`;

function BlogPostLayout({
  children,
  pageContext: {
    frontmatter: { date, title },
  },
}: Props) {
  return (
    <>
      <SEO title={title} />
      <Title>{title}</Title>
      <Metadata>posted {dayjs(date).fromNow()}</Metadata>
      {children}
    </>
  );
}

export default BlogPostLayout;
