import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { RiAddFill } from "react-icons/ri";
import Flex from "../Flex/Flex";
import Typography from "../Typography/Typography";
import MenuButton from "./MenuButton";
import Toast from "../Toast/Toast";

const Dimmer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 3;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;
`;

const MenuWrapper = styled(Flex)`
  width: 100vw;
  max-height: 0;
  position: fixed;
  align-items: baseline;
  top: 0;
  right: 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.black};
  z-index: 4;
  transition: 0.5s;

  ${(props) =>
    props.menuClicked &&
    css`
      max-height: 450px;
      transition: 0.75s;
    `}
`;

const InnerWrapper = styled(Flex)`
  width: 100%;
  max-width: 800px;
  flex-direction: column;
  padding: 36px 24px;
`;

const CancleButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const StyledPlus = styled(RiAddFill)`
  font-size: 36px;
  color: ${(props) => props.theme.colors.white};
  transition: 0.5s;

  ${(props) =>
    props.$isclicked &&
    css`
      transform: rotate(-45deg);
    `}
`;

const StyledFlex = styled(Flex)`
  width: 100%;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

const MenuBar = ({ menuClicked, menuClickedChange }) => {
  const navigate = useNavigate();

  const BlockingToast = () => {
    Toast("COMING SOON");
  };

  return (
    <>
      <AnimatePresence>
        {menuClicked && (
          <Dimmer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={menuClickedChange}
          />
        )}
      </AnimatePresence>

      <MenuWrapper menuClicked={menuClicked} justify="center" align="center">
        <InnerWrapper>
          <Flex
            justify="space-between"
            style={{ width: "100%", marginBottom: "36px" }}
          >
            <Typography
              header
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              2023 비룡제
            </Typography>
            <CancleButton onClick={menuClickedChange}>
              <StyledPlus $isclicked={menuClicked} />
            </CancleButton>
          </Flex>

          <StyledFlex>
            <MenuButton
              text="축제 안내사항"
              moveTo={() => navigate("/festa-info")}
            />
            <MenuButton
              text="부스, 푸드트럭 정보"
              moveTo={() => navigate("/booth-info")}
            />
            <MenuButton
              text="티켓팅 안내사항"
              moveTo={() => navigate("ticketing")}
            />
            <MenuButton text="인하 필름" moveTo={BlockingToast} />
            <MenuButton
              text="인하대학교 총학생회 인스타그램"
              moveTo={() =>
                window.open("https://www.instagram.com/inhastudent/")
              }
            />
            <MenuButton
              text="2023 비룡제 티저 영상"
              moveTo={() =>
                window.open("https://www.youtube.com/watch?v=7nmpWTmQqDc")
              }
            />
            <MenuButton
              text="공유하기"
              copylink="https://inha-festa-2023.pages.dev"
            />
          </StyledFlex>
        </InnerWrapper>
      </MenuWrapper>
    </>
  );
};

export default MenuBar;
