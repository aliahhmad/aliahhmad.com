import { useEffect } from "react";

const SITE_URL = "https://www.aliahhmad.com";
const DEFAULT_DESCRIPTION =
  "I'm Ali Ahmad, a full stack developer pursuing my MS in Computer Science at Rochester Institute of Technology (RIT) with a 4.0 GPA. I’m passionate about building scalable, production-ready systems.";

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
