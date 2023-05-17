import { useNavigate } from "react-router-dom";
import Layout from "../../component/Layout/Layout";
import Separator from "../../component/Separator/Separator";
import Margin from "../../component/Margin/Margin";
import Typography from "../../component/Typography/Typography";
import TextBox from "../../component/TextBox/TextBox";
import QuickLink from "../../component/QuickLink/QuickLink";

const BoothInfo = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Margin height="122" />
      <Separator />
      <Typography header>축제 부스 안내</Typography>
      <Margin height="8" />
      <TextBox
        notmove
        notitle
        detail={[
          "아래는 부스 운영에 대한 전반적인 안내사항입니다.",
          "부스는 크게 A존, B존, 프로모션 존으로 운영됩니다.",
          "부스별로 이용 시간이 상이하니 이 점 유의하여 부스 체험을 진행해 주시길 바랍니다.",
        ]}
      />
      <TextBox
        notmove
        title="아래는 부스 구역별 의무 운영 시간과 위치"
        detail={[
          "A존 : 12:00 - 18:00",
          "B존 : 15:00 - 23:00",
          "",
          "A존 위치 : 2호관 앞 / 60주년 앞",
          "B존 위치 : 정석학술정보관 뒤편",
          "프로모션존 위치 : 본관 뒤편",
        ]}
      />
      <Margin height="16" />
      <QuickLink
        text="부스 관련 공지 확인하기"
        moveTo={() =>
          window.open(
            "https://www.instagram.com/p/CsU39LJSkbm/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
          )
        }
      />
      <Margin height="16" />
      <QuickLink
        text="축제 안내사항 확인하기"
        moveTo={() => navigate("/festa-info")}
      />
      <Margin height="16" />
      <QuickLink
        text="티켓팅 안내 확인하기"
        moveTo={() => navigate("/ticketing")}
      />
      <Margin height="122" />

      <Separator />
      <Typography header>A존 안내</Typography>
      <Margin height="8" />
      <TextBox
        notmove
        title="A존 위치, 운영시간"
        detail={[
          "장소 : 2호관 앞, 60주년 기념관 앞",
          "운영 시간 : 12:00 - 18:00",
        ]}
      />
      <TextBox
        notmove
        title="동아리 부스"
        detail={[
          "A-1 :  야! 칠거면 쳐 봐! - 텐엑스",
          "A-6 : 대여 물품 보관용 창고",
          "A-7 : 우리만의 자유로운 19's QUIZ - 사범대학 학생회",
          "A-4 : 우리 사이 1CM - 1CM",
          "A-5 : 미대생 인건비 커피보다 싸다 - 조형예술학과",
          "A-3 : 인하대 공과대학 유튜브",
          "A-6 : : 대여 물품 보관용 창고",
          "A-2 : 축제의 향을 기록하다 - 소네팅",
          "A-8 : 소개통 - 국제통상학과 학생회",
          "A-9 : 인하대학교 발전기금 홍보대사 럽인",
          "A-10 : 지구오락실 - 별지기",
          "A-11 : 인하공방",
          "A-12 : 인하 암즈",
        ]}
      />
      <TextBox
        notmove
        title="미추홀구청 청년특화거리 부스"
        detail={[
          "a-1 : (주) 원클릭글로벌마켓",
          "a-2 : (주) 위드마",
          "a-3 : (주) 주",
          "a-4 : 마카롱데이즈",
          "a-5 : 엘라의 디저트 연구소",
          "a-6 : KMADE",
          "a-7 : 파퓨미",
          "a-8 : 청년정책홍보 (5.17), 메이크 임팩트(5.18 - 5.19)",
          "a-9 : 일자리박람회 (5.17), 델라루스 유리공방 (5.18 - 5.19)",
          "a-10 : 중부지방고용노동청",
        ]}
      />
      <Margin height="16" />
      <QuickLink
        text="60주년 기념관 위치 확인하기"
        moveTo={() => window.open("https://goo.gl/maps/hZ1dujwVNvC4f23C8")}
      />
      <Margin height="122" />

      <Separator />
      <Typography header>B존 안내</Typography>
      <Margin height="8" />
      <TextBox
        notmove
        title="B존 위치, 운영시간"
        detail={["장소 : 정석학술정보관 뒤편", "운영 시간 : 15:00 - 23:00"]}
      />
      <TextBox
        notmove
        title="B존 부스"
        detail={[
          "중앙관리본부",
          "GS25",
          "B-1 : 체육지원팀 (야구부) - 야구장 동시 진행",
          "B-3 : 감사팀",
          "B-4 : ABBI융합연구단",
          "B-6 : 비욘지",
          "B-7 : 인하벤처클럽",
          "B-8 : : 자연과학대학 소모임",
          "B-9 : 가게나우",
          "B-10 ~ 12 : 서포터즈 이벤트 부스",
          "B-13 : 서포터즈 스탬프 부스",
        ]}
      />
      <TextBox
        notmove
        title="총학생회 본부 부스, 의무실 안내"
        detail={[
          "총학생회 본부와 의무실은 일반부스 B존에 위치합니다.",
          "총학생회 본부 부스에서는 비룡제 팜플렛 배부와 행사 관련 민원 접수 처리를 진행합니다.",
          "의무실에서는 간단한 외상 처치와 상비 의약품을 제공합니다.",
          "몸 상태에 이상을 느끼는 학생께서는 꼭 의무실을 찾아주시기 바랍니다.",
        ]}
      />
      <Margin height="16" />
      <QuickLink
        text="정석학술정보관 위치 확인하기"
        moveTo={() => window.open("https://goo.gl/maps/NhLrcSvQ3WDUx4jq5")}
      />
      <Margin height="122" />

      <Separator />
      <Typography header>프로모션존 안내</Typography>
      <Margin height="8" />
      <TextBox
        notmove
        title="프로모션 부스"
        detail={[
          "원소주 : 5.17",
          "레드불 : 5.18 - 5.19",
          "SKC : 5.17 - 5.19",
          "티젠 : 5.17 - 5.19",
          "",
          "",
          "F&B 부스 운영 시간 : 11:00 - 24:00",
          "",
          "",
          "안전을 위해 신분증 불시검문 진행 예정이니 신분증 지참 부탁드립니다.",
        ]}
      />
      <Margin height="16" />
      <QuickLink
        text="인하대학교 본관 위치 확인하기"
        moveTo={() => window.open("https://goo.gl/maps/4J5omUyrqxmGxgMu8")}
      />
      <Margin height="122" />

      <Separator />
      <Typography header>푸드트럭 안내</Typography>
      <Margin height="8" />
      <TextBox
        notmove
        notitle
        detail={[
          "장소 : 정석학술정보관 뒤편, 본관 뒤편",
          "운영 시간 : 11:00 - 23:00",
        ]}
      />
      <TextBox
        notmove
        title="푸드트럭 메뉴 목록"
        detail={[
          "미스터 팔봉이 묵 - 타코야끼, 멘보샤",
          "더머거 - 닭꼬치",
          "머거 - 닭꼬치",
          "그레잇 - 감자튀김",
          "춘향전 - 전",
          "호떡맨(철판맨) - 야끼소바",
          "스윗랜드 - 음료",
          "지그재그 와플 - 와플",
          "파라다이스 - 음료",
          "천하제일관 - 닭강정",
          "러브디아 - 불초밥",
          "원츄츄러스 - 츄러스",
          "츄앤츄 - 츄러스",
          "남매끼리 - 스테이크리조또",
          "널 부르는 트럭 - 곱창",
          "떡볶이먹고가 - 분식",
          "로꼬트럭 - 팟타이",
          "핸드메이드 아이스크림 - 아이스크림",
          "새우상사 - 새우튀김",
        ]}
      />
      <Margin height="122" />

      <TextBox
        notmove
        title="주의사항"
        detail={[
          "본 홈페이지는 인하대학교 총학생회와 관련이 없음을 밝힙니다.",
          "현 페이지의 내용은 인하대학교 총학생회 인스타그램을 참고하여 작성되었습니다.",
          "부정확한 내용이 존재할 수 있으므로, 반드시 인하대학교 총학생회 공식 인스타그램을 참고하시기 바랍니다.",
        ]}
      />
      <Margin height="16" />
      <QuickLink
        text="인하대학교 총학생회 인스타그램"
        moveTo={() => window.open("https://www.instagram.com/inhastudent/")}
      />
      <Margin height="244" />
    </Layout>
  );
};

export default BoothInfo;
