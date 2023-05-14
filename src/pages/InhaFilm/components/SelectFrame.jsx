import { useEffect } from "react";
import styled from "styled-components";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import { motion } from "framer-motion";
import theme from "../../../assets/theme/Theme";
import Flex from "../../../component/Flex/Flex";
import Margin from "../../../component/Margin/Margin";
import QuickLink from "../../../component/QuickLink/QuickLink";
import Separator from "../../../component/Separator/Separator";
import Typography from "../../../component/Typography/Typography";
import Frame1 from "../Images/Frame1.png";
import Frame2 from "../Images/Frame2.png";
import Frame3 from "../Images/Frame3.png";
import Toast from "../../../component/Toast/Toast";

const PageWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const PhotoWrapper = styled(Flex)`
  width: 100%;
  height: 200px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  position: relative;
`;

const FrameWrapper = styled.img`
  height: 100%;
  aspect-ratio: 9 / 16;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.darkGray};
  object-fit: cover;
  z-index: 10;
  position: absolute;
  pointer-events: none;
`;

const ImageWrapper = styled.img`
  height: 100%;
  aspect-ratio: 9 / 16;
  overflow: hidden;
  box-sizing: border-box;
  padding: 2px;
  object-fit: cover;
  object-position: center top;
  position: absolute;
  pointer-events: none;
`;

const SelectFrame = ({
  pageNumber,
  setPageNumber,
  imageSrc,
  frameNumber,
  setFrameNumber,
}) => {
  useEffect(() => {
    Toast("프레임 로딩중입니다.");
  }, []);

  return (
    <PageWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Flex column style={{ width: "100%" }}>
        <Margin height="122" />
        <Separator />
        <Typography header>프레임 선택하기</Typography>
        <Margin height="24" />
      </Flex>

      <PhotoWrapper>
        <FrameWrapper
          src={frameNumber === 0 ? Frame1 : frameNumber === 1 ? Frame2 : Frame3}
        />
        <ImageWrapper src={imageSrc} />
      </PhotoWrapper>
      <Margin height="24" />

      <Flex column style={{ width: "100%" }}>
        <Flex
          justify="space-between"
          style={{ width: "100%", padding: "0 24px" }}
        >
          <RiArrowLeftLine
            size="24px"
            color={theme.colors.white}
            style={{ cursor: "pointer" }}
            onClick={() => setFrameNumber((frameNumber + 3 - 1) % 3)}
          />
          <Typography boxtext>프레임 {frameNumber + 1}</Typography>
          <RiArrowRightLine
            size="24px"
            color={theme.colors.white}
            style={{ cursor: "pointer" }}
            onClick={() => setFrameNumber((frameNumber + 3 + 1) % 3)}
          />
        </Flex>

        <Margin height="24" />
        <QuickLink
          text="인하필름 완성하기"
          moveTo={() => setPageNumber(pageNumber + 1)}
        />
        <Margin height="48" />
      </Flex>
    </PageWrapper>
  );
};

export default SelectFrame;
