import styled from "styled-components";
import { motion } from "framer-motion";
import Flex from "../../../component/Flex/Flex";
import TextBox from "../../../component/TextBox/TextBox";
import Margin from "../../../component/Margin/Margin";
import QuickLink from "../../../component/QuickLink/QuickLink";
import Separator from "../../../component/Separator/Separator";
import Typography from "../../../component/Typography/Typography";
import FilmImage from "../Images/inhafilm.png";

const PageWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const AutoHeight = styled.img`
  width: 100%;
  height: 200px;
  flex-grow: 1;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const Start = ({ pageNumber, setPageNumber }) => {
  return (
    <PageWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Margin height="122" />
      <Separator />
      <Typography header>인하필름</Typography>
      <Margin height="24" />

      <AutoHeight src={FilmImage} />
      <Margin height="16" />

      <TextBox
        notmove
        notitle
        detail={[
          "2023 인하대학교 비룡제의 추억을 사진으로 찍어보세요.",
          "준비된 3가지 프레임으로 더욱 특별하게 남겨보아요.",
          "인스타그램 스토리에 딱 맞는 사진 크기로 추억을 공유해보세요.",
        ]}
      />
      <Margin height="16" />
      <QuickLink
        text="추억 남기러 가기"
        moveTo={() => setPageNumber(pageNumber + 1)}
      />
      <Margin height="48" />
    </PageWrapper>
  );
};

export default Start;
