import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const SEO = () => {
  const location = useLocation().pathname.slice(1);
  let currentPage;
  switch (location) {
    case "":
      currentPage = "";
      break;
    case "about":
      currentPage = "about";
      break;
    case "about/":
      currentPage = "about";
      break;
    case "elsewhere":
      currentPage = "elsewhere";
      break;
    case "elsewhere/":
      currentPage = "elsewhere";
      break;
    case "oh2021":
      currentPage = "Open House 2021";
      break;
    case "oh2021/":
      currentPage = "Open House 2021";
      break;
    case "oh2021/treasure_hunt":
      currentPage = "Treasure Hunt";
      break;
    case "oh2021/treasure_hunt/":
      currentPage = "Treasure Hunt";
      break;
    case "oh2021/redstone_rush":
      currentPage = "Redstone Rush";
      break;
    case "oh2021/redstone_rush/":
      currentPage = "Redstone Rush";
      break;
    case "oh2021/speed_bakers":
      currentPage = "Speed Bakers";
      break;
    case "oh2021/speed_bakers/":
      currentPage = "Speed Bakers";
      break;
    default:
      currentPage = "404";
  }

  const title = currentPage
      ? `${currentPage.charAt(0).toUpperCase() +
          currentPage.slice(1)} | SUTD Minecraft`
      : "SUTD Minecraft",
    description = `A blocky and virtual rendition of SUTD in a student-hosted Minecraft server!`,
    image =
      "https://sutdmc.opensutd.org" + require("./assets/images/site-logo.png"),
    sitename = "SUTD Minecraft",
    url = currentPage
      ? currentPage === "404"
        ? "https://sutdmc.opensutd.org/"
        : `https://sutdmc.opensutd.org/${currentPage}/`
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
