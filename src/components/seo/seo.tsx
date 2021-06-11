import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";

interface Props {
  description?: string;
  title: string;
}

export function SEO({ description, title }: Props) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Helmet>
      {/* General tags */}
      <title>{title || data.site.siteMetadata.title}</title>
      <meta name="description" content={description} />
      {/* <meta name="image" content={image} /> */}
      <link rel="shortcut icon" type="image/png" href="images/favicon.ico" />
    </Helmet>
  );
}
