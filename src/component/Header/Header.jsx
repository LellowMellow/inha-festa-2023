import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Flex from "../Flex/Flex";
import Typography from "../Typography/Typography";
import { RiMenuFill } from "react-icons/ri";
import theme from "../../assets/theme/Theme";
import MenuBar from "./MenuBar";

const HeaderWrapper = styled.header`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.black};
  z-index: 2;
  padding: 16px 0px;
  position: fixed;
  top: 0;
`;

const InnerWrapper = styled(Flex)`
  width: 100%;
  height: fit-content;
  max-width: 800px;
  justify-content: space-between;
  margin: 0px 24px;
`;

const MenuButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();
  const [menuClicked, setMenuClicked] = useState(false);

  const menuClickedChange = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <HeaderWrapper>
      <InnerWrapper>
        <Typography
          header
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          INHA
        </Typography>
        <MenuButton menuclicked={menuClicked} onClick={menuClickedChange}>
          <RiMenuFill color={theme.colors.white} size="24px" />
        </MenuButton>
      </InnerWrapper>
      <MenuBar
        menuClicked={menuClicked}
        menuClickedChange={menuClickedChange}
      />
    </HeaderWrapper>
  );
};

export default Header;
