import styled from "styled-components";
import Flex from "../../component/Flex/Flex";
import ArtistButton from "./artistButton.png";
import Typography from "../../component/Typography/Typography";

const Box = styled(Flex)`
  width: 100%;
  height: 374px;
  border-radius: 24px;
  transition: 0.5s;
  background-color: ${(props) => props.theme.colors.black};
  overflow: hidden; // 사진이 틀밖으로 나가지 않게한다.
`;

const Photo = styled(Flex)`
  width: 100%;
  height: 374px;
  overflow: hidden;
  align-items: end;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
`;

const ArtistName = styled.div`
  padding: 16px 24px;
  border-radius: 24px;
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: ${(props) => props.theme.colors.black};
`;

const ArtistDate = styled.div`
  padding: 16px 24px;
  border-radius: 24px;
  position: absolute;
  bottom: 16px;
  left: 16px;
  background-color: ${(props) => props.theme.colors.black};
`;

const RightBottomButton = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const ArtistBox = ({ picture, name, date }) => {
  return (
    <Box flexCenter column justify="flex-start">
      <Photo flexCenter>
        <img src={picture} alt="img" />
      </Photo>
      <ArtistName>
        <Typography boxtext>{name}</Typography>
      </ArtistName>
      <ArtistDate>
        <Typography boxtext>{date}</Typography>
      </ArtistDate>
      <RightBottomButton src={ArtistButton} />
    </Box>
  );
};

export default ArtistBox;
