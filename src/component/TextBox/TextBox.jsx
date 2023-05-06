import { useState } from "react";
import styled, { css } from "styled-components";
import Flex from "../Flex/Flex";
import { FaStarOfLife } from "react-icons/fa";
import { RiArrowDownLine } from "react-icons/ri";
import theme from "../../assets/theme/Theme";
import Margin from "../Margin/Margin";
import Typography from "../Typography/Typography";

const StyledBox = styled.div`
  width: 100%;
  max-height: 70px;
  padding: 24px 24px;
  margin-top: 16px;
  background-color: ${(props) => props.theme.colors.black};
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.darkGray};
  box-shadow: 0px 4px 40px rgba(63, 47, 124, 0.25);
  border-radius: 24px;
  overflow: hidden;
  transition: 0.5s;

  :hover {
    border: 1px solid ${(props) => props.theme.colors.white};
  }

  ${(props) =>
    props.isclicked &&
    css`
      max-height: 250px;
      transition: 1s;
    `}
`;

const StyledArrow = styled(RiArrowDownLine)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
  transition: 0.5s;

  ${(props) =>
    props.$isclicked &&
    css`
      transform: rotate(-180deg);
    `}
`;

const TextBox = ({ title, detail, notmove, notitle }) => {
  const [isClicked, setIsClicked] = useState(true);

  return notmove ? (
    <StyledBox style={{ maxHeight: "none" }}>
      <Flex column align="baseline">
        {!notitle && (
          <>
            <Flex>
              <FaStarOfLife size="10px" color={theme.colors.white} />
              <Margin width="8" />
              <Typography boxtitle>{title}</Typography>
            </Flex>
            <Margin height="8" />
          </>
        )}
        {detail &&
          detail.map((v, idx) => (
            <Typography
              boxtext
              color="gray"
              key={idx}
              style={{ marginTop: "12px", lineHeight: "1.2" }}
            >
              {v}
            </Typography>
          ))}
      </Flex>
    </StyledBox>
  ) : (
    <StyledBox
      isclicked={isClicked}
      onClick={() => setIsClicked(!isClicked)}
      style={{ cursor: "pointer" }}
    >
      <Flex column align="baseline">
        <Flex justify="space-between" style={{ width: "100%" }}>
          <Flex>
            <FaStarOfLife size="10px" color={theme.colors.white} />
            <Margin width="8" />
            <Typography boxtitle>{title}</Typography>
          </Flex>
          <StyledArrow $isclicked={isClicked} />
        </Flex>
        <Margin height="8" />
        {detail &&
          detail.map((v, idx) => (
            <Typography
              boxtext
              color="gray"
              key={idx}
              style={{ marginTop: "12px" }}
            >
              {v}
            </Typography>
          ))}
      </Flex>
    </StyledBox>
  );
};

export default TextBox;
