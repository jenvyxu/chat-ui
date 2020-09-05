import styled from "styled-components";

const StyledProfile = styled.div`
  display: grid;
  align-content: flex-start;
  justify-content: center;
  justify-items: center;
  position: relative;
  padding: 30px;
  height: 100vh;
  margin-top: 2vh;
  overflow-y: auto;
`;

const SocialLinks = styled.div`
  & > * {
    margin: 0 9px;
  }
`;

export default StyledProfile;
export { SocialLinks };
