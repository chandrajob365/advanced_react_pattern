import { ExpandableBody } from "./Expandable.Body";
import { ExpandableHeader } from "./Expandable.Header";
import styled from "styled-components";

export const WrapperSection = styled.section`
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 5px solid black;
  margin: 10px;
`;

export const HeaderSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  border: 2px solid blue;
  padding: 20px;
`;
export const StyledExpandableHeader = styled(ExpandableHeader)`
  width: 80%;
  display: flex;
  justify-content: center;
`;
export const StyledExpandableBody = styled(ExpandableBody)`
  margin-top: 10px;
  padding: 5px;
`;
