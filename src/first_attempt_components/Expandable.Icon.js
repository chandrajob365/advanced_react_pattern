import React from "react";

export const ExpandableIcon = ({ id, setExpansionState, isExpanded }) => {
  return (
    <div onClick={() => setExpansionState(id)}>{isExpanded ? "-" : "+"}</div>
  );
};
