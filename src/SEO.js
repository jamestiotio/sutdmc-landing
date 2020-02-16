import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const SEO = () => {
  const location = useLocation().pathname.slice(1);

  const title = location
      ? `${location.charAt(0).toUpperCase() +
          location.slice(1)} | SUTD Minecraft`
      : "SUTD Minecraft",
    description = `A blocky and virtual rendition of SUTD in our very own student-hosted Minecraft server!`,
    image =
      "https://sutdmc.opensutd.org" + require("./assets/images/site-image.png"),
    sitename = "SUTD Minecraft",
    url = location
      ? `https://sutdmc.opensutd.org/${location}/`
      : "https://sutdmc.opensutd.org/",
    type = "website";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <link rel="canonical" href={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={sitename} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
    </Helmet>
  );
};

export default SEO;
