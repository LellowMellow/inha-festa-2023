import styled from "styled-components";
import { RiArrowRightLine } from "react-icons/ri";
import Typography from "../Typography/Typography";
import CopyToClipboard from "react-copy-to-clipboard";
import Toast from "../Toast/Toast";

const MenuInnerButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.gray};
  transition: 0.5s;

  :hover * {
    color: ${(props) => props.theme.colors.white};
  }

  @media (min-width: 800px) {
    width: 364px;
  }
`;

const StyledTypography = styled(Typography)`
  color: ${(props) => props.theme.colors.gray};
  transition: 0.5s;
`;

const StyledArrow = styled(RiArrowRightLine)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.gray};
  transition: 0.5s;
`;

const MenuButton = ({ text, moveTo, copylink }) => {
  return copylink ? (
    <CopyToClipboard
      text={copylink}
      onCopy={() => Toast("클립보드에 링크가 복사되었어요.")}
    >
      <MenuInnerButton>
        <StyledTypography boxtitle>{text}</StyledTypography>
        <StyledArrow />
      </MenuInnerButton>
    </CopyToClipboard>
  ) : (
    <MenuInnerButton onClick={moveTo}>
      <StyledTypography boxtitle>{text}</StyledTypography>
      <StyledArrow />
    </MenuInnerButton>
  );
};

export default MenuButton;
