import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../component/Layout/Layout";
import TitleImg from "../../assets/images/title.png";
import SubTitleImg from "../../assets/images/subTitle.png";
import LikeLion from "../../assets/images/likelion.png";
import Typography from "../../component/Typography/Typography";
import Margin from "../../component/Margin/Margin";
import Flex from "../../component/Flex/Flex";
import Separator from "../../component/Separator/Separator";
import TextBox from "../../component/TextBox/TextBox";
import QuickLink from "../../component/QuickLink/QuickLink";
import Toast from "../../component/Toast/Toast";
import ArtistSlick from "./ArtistSlick";

const StyledTitle = styled.img`
  width: calc(100% + 48px);
  max-width: 600px;
  margin: 0 -24px;
  height: auto;
`;

const StyledSubTitle = styled.img`
  width: calc(100% + 48px);
  max-width: 600px;
  margin: 0 -24px;
  height: auto;
`;

const QuickLinkWrapper = styled(Flex)`
  width: 100%;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const LikeLionLogo = styled.img`
  width: 30%;
  height: 30%;
  min-width: 120px;
  max-width: 200px;
  margin-bottom: 16px;
`;

const Main = () => {
  const navigate = useNavigate();

  const BlockingToast = () => {
    Toast("COMING SOON");
  };

  const dateInfo = [
    {
      id: 0,
      date: "2023.05.17 WED",
      detail: [" ", "COMING SOON", " "],
    },
    {
      id: 1,
      date: "2023.05.18 THU",
      detail: [" ", "COMING SOON", " "],
    },
    {
      id: 2,
      date: "2023.05.19 FRI",
      detail: [" ", "COMING SOON", " "],
    },
  ];

  return (
    <Layout>
      <Flex
        justify="center"
        align="center"
        style={{ width: "100%", height: "100vh" }}
      >
        <StyledTitle src={TitleImg} />
      </Flex>
      <Margin height="122" />

      <Separator />
      <StyledSubTitle src={SubTitleImg} />
      <Margin height="122" />

      <Separator />
      <Typography header>축제 일정</Typography>
      <Margin height="8" />
      {dateInfo.map((v) => (
        <TextBox key={v.id} title={v.date} detail={v.detail} />
      ))}
      <Margin height="122" />

      <Separator />
      <Typography header>SPECIAL GUEST</Typography>
      <Margin height="24" />
      <ArtistSlick />
      <Margin height="122" />

      <Separator />
      <Typography header>QUICK LINK</Typography>
      <Margin height="24" />
      <QuickLinkWrapper>
        <QuickLink
          text="축제 안내사항 확인하기"
          moveTo={() => navigate("/festa-info")}
        />
        <QuickLink
          text="부스, 푸드트럭 확인하기"
          moveTo={() => navigate("/booth-info")}
        />
      </QuickLinkWrapper>
      <Margin height="16" />
      <QuickLinkWrapper>
        <QuickLink
          text="티켓팅 안내 확인하기"
          moveTo={() => navigate("/ticketing")}
        />
        <QuickLink text="인하 필름" moveTo={BlockingToast} />
      </QuickLinkWrapper>
      <Margin height="16" />
      <QuickLinkWrapper>
        <QuickLink
          text="인하대학교 총학생회 인스타그램"
          moveTo={() => window.open("https://www.instagram.com/inhastudent/")}
        />
        <QuickLink
          text="2023 비룡제 티저 영상"
          moveTo={() =>
            window.open("https://www.youtube.com/watch?v=7nmpWTmQqDc")
          }
        />
      </QuickLinkWrapper>
      <Margin height="16" />
      <QuickLink
        text="페이지 공유하기"
        copylink="https://inha-festa-2023.pages.dev"
      />
      <Margin height="122" />

      <Separator />
      <LikeLionLogo src={LikeLion} />
      <Typography boxtitle>LIKELION 11TH X INHA UNIV.</Typography>
      <Margin height="16" />
      <Typography
        boxtext
        color="gray"
        style={{
          textAlign: "center",
          lineHeight: "1.5",
        }}
      >
        해당 웹페이지는 인하대학교 멋쟁이사자처럼 11기에서 제작하였습니다.
      </Typography>
      <Margin height="24" />
      <a href="https://www.instagram.com/likelion_inha/" target="_blank">
        <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Finha-festa-2023.pages.dev&count_bg=%23000000&title_bg=%23000000&icon=react.svg&icon_color=%23FFFFFF&title=hits&edge_flat=true" />
      </a>

      <Margin height="244" />
    </Layout>
  );
};

export default Main;
