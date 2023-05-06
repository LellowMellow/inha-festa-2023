import styled from "styled-components";
import Flex from "../Flex/Flex";
import { RiArrowRightLine, RiLinksFill } from "react-icons/ri";
import Margin from "../Margin/Margin";
import Typography from "../Typography/Typography";
import theme from "../../assets/theme/Theme";
import CopyToClipboard from "react-copy-to-clipboard";
import Toast from "../Toast/Toast";

const StyledBox = styled.button`
  width: 100%;
  padding: 20px 24px;
  background-color: ${(props) => props.theme.colors.black};
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.darkGray};
  box-shadow: 0px 4px 40px rgba(63, 47, 124, 0.25);
  border-radius: 24px;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;

  :hover {
    border: 1px solid ${(props) => props.theme.colors.white};
  }
`;

const QuickLink = ({ text, moveTo, copylink }) => {
  return copylink ? (
    <CopyToClipboard
      text={copylink}
      onCopy={() => Toast("클립보드에 링크가 복사되었어요.")}
    >
      <StyledBox target="_blank">
        <Flex justify="space-between" style={{ width: "100%" }}>
          <Flex>
            <RiLinksFill size="20px" color={theme.colors.white} />
            <Margin width="8" />
            <Typography
              boxtext
              style={{
                lineHeight: "1.2",
                textAlign: "left",
              }}
            >
              {text}
            </Typography>
          </Flex>
          <RiArrowRightLine size="24px" color={theme.colors.white} />
        </Flex>
      </StyledBox>
    </CopyToClipboard>
  ) : (
    <StyledBox onClick={moveTo} target="_blank">
      <Flex justify="space-between" style={{ width: "100%" }}>
        <Flex>
          <RiLinksFill size="20px" color={theme.colors.white} />
          <Margin width="8" />
          <Typography
            boxtext
            style={{
              lineHeight: "1.2",
              textAlign: "left",
            }}
          >
            {text}
          </Typography>
        </Flex>
        <RiArrowRightLine size="24px" color={theme.colors.white} />
      </Flex>
    </StyledBox>
  );
};

export default QuickLink;
