import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../component/Layout/Layout";
import Separator from "../../component/Separator/Separator";
import Margin from "../../component/Margin/Margin";
import Typography from "../../component/Typography/Typography";
import TextBox from "../../component/TextBox/TextBox";
import QuickLink from "../../component/QuickLink/QuickLink";
import Toast from "../../component/Toast/Toast";

const Ticketing = () => {
  const navigate = useNavigate();
  const deadline = "2023.05.16 12:00:00";

  const [restHour, setRestHour] = useState(0);
  const [restMinute, setRestMinute] = useState(0);
  const [restSecond, setRestSecond] = useState(0);
  const [isZero, setIsZero] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      const curTime = new Date();
      const diff = new Date(deadline) - curTime;
      if (diff >= 0) {
        setRestHour(Math.floor((diff / (1000 * 60 * 60)) % 24));
        setRestMinute(Math.floor((diff / (1000 * 60)) % 60));
        setRestSecond(Math.floor((diff / 1000) % 60));
      }
    }, 1000);
    // 1초마다 실행되는 인터벌을 이용해 1초마다 다시 랜더링 시켜줌
    return () => clearInterval(id);
    // 페이지를 벗어나게되면 반복을 종료해줌
  }, [deadline]);

  useEffect(() => {
    if (restHour === 0 && restMinute === 0 && restSecond === 0) setIsZero(true);
    else setIsZero(false);
  }, [restHour, restMinute]);

  return (
    <Layout>
      <Margin height="122" />
      <Separator />
      <Typography header>재학생존 티켓팅 안내</Typography>
      <Margin height="8" />
      <TextBox
        notmove
        notitle
        detail={[
          "이번 비룡제에서는 축제 일자 별 3,000명 규모의 재학생존을 운영합니다.",
          "티켓팅은 사전 티켓팅과 온라인 티켓팅으로 나뉘어 진행됩니다.",
          "사전 티켓팅에서 1500명, 온라인 티켓팅에서 1500명씩 티켓팅을 진행합니다.",
          "사전 티켓팅에 참여하지 못한 예비군 현장 티켓팅 또한 진행될 예정입니다.",
        ]}
      />
      <Margin height="16" />
      <QuickLink
        text="축제 안내사항 확인하기"
        moveTo={() => navigate("/festa-info")}
      />
      <Margin height="16" />
      <QuickLink
        text="부스, 푸드트럭 확인하기"
        moveTo={() => navigate("/booth-info")}
      />
      <Margin height="122" />

      <Separator />
      <Typography header>예비군 현장 티켓팅 안내</Typography>
      <Margin height="8" />
      <TextBox
        notmove
        notitle
        detail={[
          "예비군 훈련으로 인해 사전 티켓팅에 참여하지 못한 분들을 대상으로 별도의 티켓팅이 진행됩니다.",
          "사전 티켓팅 기간 (5.10 - 5.12) 내 예비군 대상이셨던 학생분들을 대상으로 합니다.",
        ]}
      />
      <TextBox
        notmove
        title="예비군 티켓팅 자격 요건 안내"
        detail={[
          "5.10 - 5.12 사전 티켓팅 당일 학생 예비군 대상 학과 소속 예비군 대상 학생이어야 합니다.",
          "학생 예비군으로 참여하지 못한 해당 날짜 (5.10 : DAY 1 / 5.11 : DAY 2 / 5.12 : DAY 3) 의 공연 티켓에 해당됩니다.",
          "해당 예비군 훈련 참여를 증빙할 수 있는 ‘예비군 교육 훈련 필증’을 반드시 인쇄하여 지참하여야 참여하실 수 있습니다.",
        ]}
      />
      <TextBox
        notmove
        title="예비군 티켓팅 일정 안내"
        detail={[
          "티켓팅 시작 시간 : 축제 당일 오전 10시",
          "티켓 장소 : 농구장 옆 티켓 배부처",
          "티켓팅 준비 서류 : 예비군 필증, 학생증 (예비군 필증은 인쇄하여 실물로 지참할 것)",
        ]}
      />
      <TextBox
        notmove
        title="티켓팅 가능 인원"
        detail={[
          "[ DAY 1 티켓팅 ]",
          "적용 대상 학과 : 화학공학과, 사회인프라공학과, 공간정보학과, 환경공학과",
          "당일 티켓팅 가능인원 : 40명 (39.7969명)",
          "",
          "[ DAY 2 티켓팅 ]",
          "적용 대상 학과 : 전자공학과, 정보통신공학과",
          "당일 티켓팅 가능인원 : 40명 (39.8130명)",
          "",
          "[ DAY 3 티켓팅 ]",
          "12일은 학생 예비군이 없었습니다.",
        ]}
      />
      <Margin height="16" />
      <QuickLink
        text="예비군 교육 훈련 필증 확인하기"
        moveTo={() =>
          window.open("https://www.yebigun1.mil.kr/dmobis/index_main.do")
        }
      />
      <Margin height="16" />
      <QuickLink
        text="총학생회 본부 위치 확인하기"
        moveTo={() => window.open("https://goo.gl/maps/M8A2E93QL7qQQ2Qr5")}
      />
      <Margin height="16" />
      <QuickLink
        text="관련 공지 확인하기"
        moveTo={() =>
          window.open(
            "https://www.instagram.com/p/CsUnONivPfj/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
          )
        }
      />
      <Margin height="122" />

      <Separator />
      <Typography header>온라인 티켓팅 안내 (종료)</Typography>
      <Margin height="8" />
      <TextBox
        notmove
        notitle
        detail={[
          "사전 티켓팅에 성공하지 못하셨거나 시간이 맞지 않아 도전하지 못하신 분들을 대상으로 합니다.",
          "사전 티켓팅을 하지 않으신 분들도 당일 티켓팅을 통해 재학생존에 입장하실 수 있습니다.",
          "당일 티켓팅은 일자별 1,500명을 대상으로 하며 선착순이 아닌 온라인 추첨식으로 진행됩니다.",
        ]}
      />
      <TextBox
        notmove
        title="온라인 티켓팅 일정"
        detail={[
          "5.15 월요일 12:00 - 5.16 화요일 12:00",
          "24시간동안의 신청을 바탕으로 추첨을 진행합니다.",
          "DAY 1부터 DAY 3까지 축제 일자 전체에 대한 티켓팅이 진행됩니다.",
          "선착순이 아닌 추첨제를 통해 진행되며, 해당 시간 사이에 하단 링크를 통해 신청하시기 바랍니다.",
        ]}
      />
      <TextBox
        notmove
        title="온라인 티켓팅 마감까지"
        detail={[`${restHour}시간 ${restMinute}분 ${restSecond}초`]}
      />
      <Margin height="16" />
      <QuickLink
        text="온라인 티켓팅 신청하기"
        moveTo={() => window.open("https://www.inha.ac.kr/kr/4076/subview.do")}
      />
      <Margin height="122" />

      <Separator />
      <Typography header>사전 티켓팅 안내 (종료)</Typography>
      <Margin height="8" />
      <TextBox
        notmove
        notitle
        detail={[
          "사전 티켓팅은 일자 별 1500명 규모의 티켓을 배부합니다.",
          "사전 티켓팅은 2023년 5월 10일부터 2023년 5월 12일까지 3일간 진행됩니다.",
          "사전 티켓팅은 매일 1차, 2차로 나뉘어 진행되며 자세한 사항은 아래와 같습니다.",
        ]}
      />
      <TextBox
        notmove
        title="사전 티켓팅 일정"
        detail={[
          "5.10 : Day 1(5.17) 공연 티켓 예매 가능",
          "5.11 : Day 2(5.18) 공연 티켓 예매 가능",
          "5.12 : Day 3(5.19) 공연 티켓 예매 가능",
        ]}
      />
      <TextBox
        notmove
        title="사전 티켓팅 부스 운영 시간"
        detail={[
          "1차 사전 티켓팅 : 12:00 - 15:00",
          "2차 사전 티켓팅 : 18:00 - 21:00",
          "- 인원 분산 및 수업 시간의 영향을 최소화하기 위해 두 번으로 나누어 진행합니다.",
          "- 회차별 750명을 대상으로 티켓팅을 실시합니다.",
          "- 회차별 배부 가능 티켓량이 소진될 시, 조기에 마감될 수 있습니다.",
          "- 회차별 사전 티켓 배부 시작 시간 30분 전(12시 티켓 배부의 경우 11시 30분, 18시 티켓 배부의 경우 17시 30분)부터 대기줄을 운영할 예정입니다.",
        ]}
      />
      <TextBox
        notmove
        title="사전 티켓팅 장소, 필수 지참 품목"
        detail={[
          "사전 티켓팅은 '김현태인하드림센터 1층' 에서 진행됩니다.",
          "재학생존 대상자(학부생 중 정규등록생, 부분등록생, 휴학생) 증빙용 학생증 또는 모바일 학생증을 꼭 지참하시기 바랍니다.",
        ]}
      />
      <TextBox
        notmove
        title="사전 티켓팅 유의 사항"
        detail={[
          "모든 사전 티켓팅은 선착순으로 진행됩니다.",
          "동일한 날짜의 티켓팅은 한 번만 참여 가능합니다.",
          "사전 티켓팅 부스에서는 티켓을 발급하지 않으며, 해당 티켓의 공연 당일에 설치된 티켓 부스에서 수령 가능합니다.",
          "1차 사전 티켓팅 신청자가 동일한 날짜의 2차 사전 티켓팅 신청이 불가능합니다.",
          "모든 사전 티켓팅 신청자는 해당 신청 일자의 당일 티켓팅 참여가 불가능합니다.",
          "재학생존은 인하대학교 정규등록생·부분등록생·휴학생 등 학부생을 대상으로 합니다.",
          "대리 수령은 절대 금지하며, 적발 시 재학생존 영구 입장 불가 처리됩니다.",
        ]}
      />
      <Margin height="122" />

      <TextBox
        notmove
        title="주의사항"
        detail={[
          "본 홈페이지는 인하대학교 총학생회와 관련이 없음을 밝힙니다.",
          "현 페이지의 내용은 인하대학교 총학생회 에브리타임 게시글을 참고하여 작성되었습니다.",
          "부정확한 내용이 존재할 수 있으므로, 반드시 인하대학교 총학생회 공식 인스타그램을 참고하시기 바랍니다.",
        ]}
      />
      <Margin height="16" />
      <QuickLink
        text="인하대학교 총학생회 인스타그램"
        moveTo={() => window.open("https://www.instagram.com/inhastudent/")}
      />
      <Margin height="16" />
      <QuickLink
        text="에브리타임 티켓팅 게시글 확인하기"
        moveTo={() => window.open("https://everytime.kr/374912/v/302093497")}
      />
      <Margin height="244" />
    </Layout>
  );
};

export default Ticketing;
