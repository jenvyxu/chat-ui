import styled from "styled-components";

const StyledNoteList = styled.div``;

const Notes = styled.div`
  & > * {
    margin: 8px 0;
  }
  margin-top: -8px;
`;

export default StyledNoteList;

export { Notes };
