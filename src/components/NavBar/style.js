import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { activeBar } from "utils/mixins";
import StyledAvatar, { StatusIcon } from "components/Avatar/style";

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

const StyledNavBar = styled.nav`
  display: grid;
  grid-template-rows: 1fr 4fr;
  width: 100px;
  height: 100vh;
  background-color: ${({ theme }) => theme.darkPurple};
  padding: 30px 0;

  ${StyledAvatar} {
    justify-self: center;
    ${StatusIcon} {
      &::before {
        background-color: ${({ theme }) => theme.darkPurple};
      }
    }
  }
`;

const MenuIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 24px;
  opacity: ${({ active }) => (active ? 1 : 0.3)};
`;

const MenuItems = styled.div`
  display: grid;
  grid-template-rows: repeat(5, minmax(auto, 88px)) 1fr;
`;

export default StyledNavBar;

export { StyledMenuItem, MenuIcon, MenuItems };
