import dayjs from "dayjs";
import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import relativeTime from "dayjs/plugin/relativeTime";
import { SEO } from "../components/seo/seo";

dayjs.extend(relativeTime);

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlogLink = styled(Link)`
  text-decoration: none;

  &,
  &:visited {
    color: inherit;
  }

  &:hover {
    color: var(--purple);
  }
`;

function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          excerpt
          slug
          frontmatter {
            title
            date
          }
        }
      }
    }
  `);
  return (
    <React.Fragment>
      <SEO description="Ekansh Vinaik's blog." title="Ekansh Vinaik's Blog" />
      <List>
        {data.allMdx.nodes.map((n) => (
          <ListItem key={n.slug}>
            <ItemContainer>
              <h2>
                <BlogLink to={`/${n.slug}`}>{n.frontmatter.title}</BlogLink>
              </h2>
              <p>{n.excerpt}</p>
              <p>{dayjs(n.frontmatter.date).fromNow()}</p>
            </ItemContainer>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

export default BlogPage;
