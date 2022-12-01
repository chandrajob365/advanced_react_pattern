import React, { useCallback } from "react";
import { useIsExpandedHook } from "./customHook.js/useIsExpandedHook";
import { usePageContentHook } from "./customHook.js/usePageContentHook";
import { Expandable } from "./Expandable";
const Expandables = () => {
  const [pageContent] = usePageContentHook();
  const [expandedSection, handleExpansion] = useIsExpandedHook();

  const render = useCallback(() => {
    return pageContent.map((content, index) => {
      return (
        <Expandable
          key={index}
          content={content}
          handleExpansion={handleExpansion}
          isExpanded={expandedSection[content.id]}
        />
      );
    });
  }, [pageContent, handleExpansion, expandedSection]);

  return <>{(pageContent.length <= 0 && <div>Loading...</div>) || render()}</>;
};

export default Expandables;
