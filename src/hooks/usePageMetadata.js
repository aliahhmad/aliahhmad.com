import { useEffect } from "react";

const SITE_URL = "https://www.aliahhmad.com";
const DEFAULT_DESCRIPTION =
  "Ali Ahmad is a full stack developer at RIT building modern web applications with React, Node.js, and cloud technologies. Explore his portfolio and projects.";

function upsertMeta(name, content) {
  let element = document.head.querySelector(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

const usePageMetadata = ({
  title,
  path = "/",
  description = DEFAULT_DESCRIPTION,
}) => {
  useEffect(() => {
    document.title = `${title} | Ali Ahmad`;
    upsertMeta("description", description);
    upsertMeta("robots", "index,follow");
    upsertCanonical(new URL(path, SITE_URL).toString());
  }, [description, path, title]);
};

export default usePageMetadata;
