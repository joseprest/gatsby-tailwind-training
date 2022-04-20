import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ url, title, desc, ogImage }) => {
  return (
    <Helmet>
      <meta name="generator" content={desc} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@wearetimeflow" />
      <meta name="twitter:creator" content="@wearetimeflow" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={`${title}`} />
      <meta name="twitter:description" content={desc} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`${title}`} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={desc} />
      <meta name="description" content={desc} />
      <meta property="og:site_name" content="Timeflow Academy" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <title>{title}</title>
    </Helmet>
  );
};

export default SEO;
