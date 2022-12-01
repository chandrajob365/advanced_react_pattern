import React, { useEffect, useState } from "react";
import { getData } from "../../mock";
export const usePageContentHook = () => {
  const [pageContent, setPageContent] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      console.log(res);
      setPageContent(res);
    });
  });
  return [pageContent];
};
