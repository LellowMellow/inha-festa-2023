import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toPng, toJpeg } from "html-to-image";
import styled, { css } from "styled-components";
import Flex from "../../../component/Flex/Flex";
import Margin from "../../../component/Margin/Margin";
import QuickLink from "../../../component/QuickLink/QuickLink";
import Separator from "../../../component/Separator/Separator";
import Typography from "../../../component/Typography/Typography";
import Frame1 from "../Images/Frame1.png";
import Frame2 from "../Images/Frame2.png";
import Frame3 from "../Images/Frame3.png";
import BackFrame from "../Images/BackFrame.png";
import Toast from "../../../component/Toast/Toast";

const PageWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Card = styled(Flex)`
  width: 100%;
  height: 200px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transition: all 1s;
  position: relative;

  ${(props) =>
    props.cardClicked &&
    css`
      transform: rotateY(180deg);
    `}
`;

const PhotoWrapper = styled(Flex)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  z-index: 10;
  position: absolute;
  backface-visibility: hidden;
`;

const BackWrapper = styled(Flex)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  z-index: 5;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
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

const Download = ({ imageSrc, frameNumber, componentRef }) => {
  const navigate = useNavigate();
  const [cardClicked, setCardClicked] = useState(false);

  const downloadPhoto = () => {
    Toast("이미지로 변환중입니다.");
    Toast("10초 뒤 다운로드가 시작됩니다.");
    toJpeg(document.getElementById("download-photo"), {
      cacheBust: true,
      width: 1080,
      height: 1920,
      canvasWidth: 1080,
      canvasHeight: 1920,
      skipAutoScale: true,
      quality: 0.6,
    }).then((image) => {
      const link = window.document.createElement("a");
      link.style = "display:none;";
      link.download = "inhafilm.jpeg";
      link.href = image;
      link.click();
    });
  };

  return (
    <PageWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Margin height="122" />
      <Separator />
      <Typography header>2023 비룡제 인하 필름</Typography>
      <Margin height="24" />

      <Card
        cardClicked={cardClicked}
        onClick={() => setCardClicked(!cardClicked)}
      >
        <PhotoWrapper>
          <FrameWrapper
            src={
              frameNumber === 0 ? Frame1 : frameNumber === 1 ? Frame2 : Frame3
            }
          />
          <ImageWrapper src={imageSrc} />
        </PhotoWrapper>
        <BackWrapper>
          <FrameWrapper src={BackFrame} />
        </BackWrapper>
      </Card>
      <Margin height="24" />

      <QuickLink text="완성된 사진 다운받기" moveTo={downloadPhoto} />
      <Margin height="16" />
      <QuickLink text="홈으로 돌아가기" moveTo={() => navigate("/")} />
      <Margin height="48" />
    </PageWrapper>
  );
};

export default Download;
