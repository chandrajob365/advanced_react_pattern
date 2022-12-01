import React, { useCallback, useState } from "react";
export const useIsExpandedHook = () => {
  const [expandedSection, setExpandedSection] = useState({});
  const handleExpansion = useCallback(
    (id) => {
      console.log("id : ", id);
      // Below code allows all sections to be opend at once
      // setExpandedSection((prev) => ({
      //   ...prev,
      //   [id]: !prev[id],
      // }));
      setExpandedSection({ [id]: !expandedSection[id] });
    },
    [expandedSection]
  );
  return [expandedSection, handleExpansion];
};
