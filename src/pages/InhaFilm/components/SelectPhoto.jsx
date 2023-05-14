import styled from "styled-components";
import { motion } from "framer-motion";
import { RiArrowRightLine, RiLinksFill } from "react-icons/ri";
import theme from "../../../assets/theme/Theme";
import Flex from "../../../component/Flex/Flex";
import TextBox from "../../../component/TextBox/TextBox";
import Margin from "../../../component/Margin/Margin";
import QuickLink from "../../../component/QuickLink/QuickLink";
import Separator from "../../../component/Separator/Separator";
import Typography from "../../../component/Typography/Typography";
import Toast from "../../../component/Toast/Toast";

const PageWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const ImageWrapper = styled(Flex)`
  width: 100%;
  height: 200px;
  flex-grow: 1;
  border-radius: 24px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.black};
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.darkGray};
  box-shadow: 0px 4px 40px rgba(63, 47, 124, 0.25);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    flex-grow: 1;
    border: 0;
  }
`;

const StyledLabel = styled.label`
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

const StyledInput = styled.input`
  display: none;
`;

const SelectPhoto = ({ pageNumber, setPageNumber, imageSrc, setImageSrc }) => {
  const onUpload = (e) => {
    if (e.target.files.length === 0) return;
    else {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      return new Promise((resolve) => {
        reader.onload = () => {
          setImageSrc(reader.result || null); // 파일의 컨텐츠
          resolve();
        };
      });
    }
  };

  const moveToNext = () => {
    if (imageSrc === null) Toast("사진을 선택해주세요.");
    else setPageNumber(pageNumber + 1);
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
      <Typography header>사진 선택하기</Typography>
      <Margin height="24" />

      <ImageWrapper>
        {imageSrc !== null && <img src={imageSrc} alr="img" />}
      </ImageWrapper>
      <Margin height="16" />

      <StyledLabel htmlFor="file">
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
              사진 선택하기
            </Typography>
          </Flex>
          <RiArrowRightLine size="24px" color={theme.colors.white} />
        </Flex>
      </StyledLabel>

      <StyledInput
        type="file"
        name="file"
        id="file"
        accept="image/*"
        onChange={(e) => onUpload(e)}
      />
      <Margin height="24" />

      <TextBox
        notmove
        notitle
        detail={[
          "세로로 긴 사진을 선택하는 것을 추천해요.",
          "선택한 사진은 따로 저장되지 않아요.",
        ]}
      />
      <Margin height="16" />
      <QuickLink text="프레임 선택하러 가기" moveTo={moveToNext} />
      <Margin height="48" />
    </PageWrapper>
  );
};

export default SelectPhoto;
