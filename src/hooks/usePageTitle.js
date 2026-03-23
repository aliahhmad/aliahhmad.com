// hooks/usePageTitle.js
import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Ali Ahmad`;
  }, [title]);
};

export default usePageTitle;