import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | PMS`;
  }, [title]);
};

export default usePageTitle;
