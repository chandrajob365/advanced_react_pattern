import React from "react";
import { ExpandableIcon } from "./Expandable.Icon";
import {
  StyledExpandableBody,
  StyledExpandableHeader,
  WrapperSection,
  HeaderSection,
} from "./StyledComponents";

export const Expandable = ({
  content: { id, title, description },
  handleExpansion,
  isExpanded,
}) => {
  return (
    <WrapperSection>
      <HeaderSection>
        <StyledExpandableHeader key={id + title} title={title} />
        <ExpandableIcon
          key={id + title + description}
          id={id}
          setExpansionState={handleExpansion}
          isExpanded={isExpanded}
        />
      </HeaderSection>
      {isExpanded && (
        <StyledExpandableBody
          key={id + description}
          description={description}
        />
      )}
    </WrapperSection>
  );
};
