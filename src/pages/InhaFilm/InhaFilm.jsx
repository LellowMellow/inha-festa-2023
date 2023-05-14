import { useState, useRef } from "react";
import styled from "styled-components";
import Layout from "../../component/Layout/Layout";
import Flex from "../../component/Flex/Flex";
import Start from "./components/Start";
import SelectPhoto from "./components/SelectPhoto";
import SelectFrame from "./components/SelectFrame";
import Download from "./components/Download";
import Frame1 from "./Images/Frame1.png";
import Frame2 from "./Images/Frame2.png";
import Frame3 from "./Images/Frame3.png";

const HidePhoto = styled.div`
  position: fixed;
  top: -2000px;
`;

const PhotoWrapper = styled(Flex)`
  width: 1080px;
  height: 1920px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  position: relative;
  padding: 0;
  margin: 0;
`;

const FrameWrapper = styled.img`
  width: 1080px;
  height: 1920px;
  aspect-ratio: 9 / 16;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.darkGray};
  object-fit: cover;
  z-index: 10;
  position: absolute;
  pointer-events: none;
  padding: 0;
  margin: 0;
`;

const ImageWrapper = styled.img`
  height: 1920px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;

  .vertical {
    width: 100%;
  }

  .horizontal {
    height: 100%;
  }
  padding: 0;
  margin: 0;
`;

const InhaFilm = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [imageSrc, setImageSrc] = useState(null);
  const [frameNumber, setFrameNumber] = useState(0);

  const componentRef = useRef();

  return (
    <Layout>
      {pageNumber === 0 && (
        <Start pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
      {pageNumber === 1 && (
        <SelectPhoto
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          imageSrc={imageSrc}
          setImageSrc={setImageSrc}
        />
      )}
      {pageNumber === 2 && (
        <SelectFrame
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          imageSrc={imageSrc}
          frameNumber={frameNumber}
          setFrameNumber={setFrameNumber}
        />
      )}
      {pageNumber === 3 && (
        <Download
          pageNumber={pageNumber}
          imageSrc={imageSrc}
          frameNumber={frameNumber}
          componentRef={componentRef}
        />
      )}

      <HidePhoto>
        <PhotoWrapper ref={componentRef} id="download-photo">
          <FrameWrapper
            src={
              frameNumber === 0 ? Frame1 : frameNumber === 1 ? Frame2 : Frame3
            }
          />
          <ImageWrapper src={imageSrc} />
        </PhotoWrapper>
      </HidePhoto>
    </Layout>
  );
};

export default InhaFilm;
