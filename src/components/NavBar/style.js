import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { activeBar } from "utils/mixins";

const StyledMenuItem = styled.div`
  & > a {
    width: 100%;
    height: 74px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${activeBar()};
    ${({ active }) => (active ? "" : `&::before,&::after {height: 0}`)};
  }
`;

const StyledNavBar = styled.div``;

const MenuIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 24px;
  opacity: ${({ active }) => (active ? 1 : 0.3)};
`;

export default StyledNavBar;

export { StyledMenuItem, MenuIcon };
