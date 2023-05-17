import { useNavigate } from "react-router-dom";
import Layout from "../../component/Layout/Layout";
import Separator from "../../component/Separator/Separator";
import Margin from "../../component/Margin/Margin";
import Typography from "../../component/Typography/Typography";
import TextBox from "../../component/TextBox/TextBox";
import QuickLink from "../../component/QuickLink/QuickLink";

const FestaInfo = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Margin height="122" />
      <Separator />
      <Typography header>재학생존 안내</Typography>
      <Margin height="8" />
      <TextBox
        notmove
        title="재학생존 대상자"
        detail={[
          "일별 사전 티켓팅 1500명 + 일별 온라인 티켓팅 1500명",
          "재학생존 입장을 위해 팔찌 교환이 필요합니다.",
        ]}
      />
      <TextBox
        notmove
        title="재학생존 입장 절차"
        detail={[
          "09:00 - 19:30 | 축제 당일, 본인 확인을 통해 재학생존 입장을 위한 팔찌를 교환합니다.",
          "16:30 - 20:00 | 선착순으로 줄을 선 뒤, 재학생존에 입장합니다.",
        ]}
      />
      <TextBox
        notmove
        title="팔찌 수령 안내"
        detail={[
          "09:00 - 19:30에 진행됩니다.",
          "당일 '농구장 옆 본부'에서 팔찌를 교환받습니다.",
          "교환 시에 사전에 입력된 학생 정보와 일치하는지 확인 절차가 필요합니다.",
          "팔찌 착용 후, 재학생존에 입장합니다.",
          "학생증/모바일 학생증/재학증명서 등 본인 학적과 본인 사진이 확인 가능한 증빙자료가 필요합니다.",
        ]}
      />
      <TextBox
        notmove
        title="재학생존 입장 안내"
        detail={[
          "16:30 - 20:00에 진행됩니다.",
          "착용한 팔찌와 본인 확인이 가능한 증빙자료 확인 이후 입장합니다.",
          "팔찌가 훼손되는 경우 입장이 불가합니다.",
        ]}
      />
      <TextBox
        notmove
        title="유의사항"
        detail={[
          "팔찌를 착용했더라도 20시 이후 출입이 제한될 수 있습니다.",
          "선착순으로 입장하며, 16시보다 이른 시간에 임의로 줄을 서는 것은 엄격히 제한합니다.",
          "입장 시 뛸 경우 안전상의 이유로 바로 퇴장당할 수 있습니다.",
          "재학생존에서 퇴장할 경우 재입장하려면 줄을 다시 서야합니다.",
          "화장실은 입장 전에 미리 이용하시는 것을 권장드립니다.",
          "티켓과 팔찌를 모두 배부 받더라도 현장 상황에 따라 입장이 제한될 수 있습니다.",
          "뚜껑이 있는 페트병에 담긴 음료와 물 이외의 음식물은 반입을 금지합니다.",
          "암표 거래가 적발될 경우, 재학생존 입장을 영구히 제한합니다.",
          "당일 안전요원들의 지시에 따르지 않을 경우, 퇴장 조치가 될 수 있습니다.",
        ]}
      />
      <Margin height="16" />
      <QuickLink
        text="총학생회 본부 위치 확인하기"
        moveTo={() => window.open("https://goo.gl/maps/M8A2E93QL7qQQ2Qr5")}
      />
      <Margin height="16" />
      <QuickLink
        text="부스, 푸드트럭 확인하기"
        moveTo={() => navigate("/booth-info")}
      />
      <Margin height="16" />
      <QuickLink
        text="티켓팅 안내 확인하기"
        moveTo={() => navigate("/ticketing")}
      />
      <Margin height="122" />
      <Separator />
      <Typography header>공연 일정</Typography>
      <Margin height="8" />
      <TextBox
        notmove
        title="2023.05.17 WED"
        detail={[
          "- 개막식",
          "- 군악대",
          "- 플라곤",
          "- 인하대학교 태권도부",
          "- 라이브즈",
          "- 트리키",
          "- 카더가든 - Car, the garden",
          "- 헤이즈 - HEIZE",
          "- 기리보이 - GIRIBOY",
        ]}
      />
      <TextBox
        notmove
        title="2023.05.18 THU"
        detail={[
          "- MC 오프닝",
          "- 팝뮤직",
          "- 인하밴드",
          "- 꼬망스",
          "- 인드키 - INDKY",
          "- 마크툽 - MAKTUB",
          "- 빅나티 - BIG Naughty",
          "- 싸이 - PSY",
        ]}
      />
      <TextBox
        notmove
        title="2023.05.19 FRI"
        detail={[
          "- MC 오프닝",
          "- 인하대학교 방송댄스 소모임 - Ic",
          "- F.L.E.X",
          "- 개로",
          "- 인하대학교 응원단 - ASSESS",
          "- 현아 - Hyun A",
          "- 크러쉬 - Crush",
        ]}
      />
      <TextBox
        notmove
        notitle
        detail={[
          "16:30부터 무대 관람 구역 입장이 가능합니다.",
          "17:30부터 상단 순서에 따라 무대가 진행됩니다.",
        ]}
      />
      <Margin height="16" />
      <QuickLink
        text="무대 위치 확인하기"
        moveTo={() => window.open("https://goo.gl/maps/7oKUV3Hdj18jYB8L6")}
      />
      <Margin height="122" />
      <Separator />
      <Typography header>포토부스 운영 안내</Typography>
      <Margin height="8" />
      <TextBox
        notmove
        title="운영 시간, 가격 안내"
        detail={[
          "기업 : 포토에이스",
          "운영 기간 : 05.17 - 05.23 (일주일)",
          "운영 시간 : 매일 09:00 - 22:00",
          "장소 : 학생회관 앞, 5호관 남쪽 앞",
          "4컷 프레임 2매 : 4000원",
          "6컷 프레임 2매 : 5000원",
        ]}
      />
      <Margin height="16" />
      <QuickLink
        text="학생회관 앞 포토부스 위치 확인하기"
        moveTo={() => window.open("https://goo.gl/maps/rgHWiKNdCSbEUzdBA")}
      />
      <Margin height="16" />
      <QuickLink
        text="5호관 남쪽 앞 포토부스 위치 확인하기"
        moveTo={() => window.open("https://goo.gl/maps/r6iv7nJo7dmZ27yAA")}
      />
      <Margin height="16" />
      <QuickLink
        text="프레임 디자인 확인하기"
        moveTo={() =>
          window.open(
            "https://www.instagram.com/p/CsUB0cJyTMW/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D"
          )
        }
      />
      <Margin height="122" />
      <Separator />
      <Typography header>인경호 보트하우스 안내</Typography>
      <Margin height="8" />
      <TextBox
        notmove
        notitle
        detail={[
          "인경호에서 총학생회와 조정부가 준비한 카약 체험으로 특별한 추억을 만들어보세요.",
          "2인용 카약을 친구와, 연인과 함께 타보며 2023 비룡제만의 특별한 추억을 남겨보세요.",
        ]}
      />
      <TextBox
        notmove
        title="프로그램 안내와 주의사항"
        detail={[
          "운영 기간 : 05.17 - 05.19",
          "운영 시간 : 15:00 - 19:00 (4시간)",
          "장소 : 인경호 앞",
          "체험 시간 : 20분",
          "체험 방법 : 20붙마다 QR코드를 이용하여 선착순으로 참가자 모집",
          "",
          "",
          "- 카약 탐승 전 사전 교육 시, 조정부 운영 위원들의 교육을 경청해주세요.",
          "- 카약 탐승 시, 구명 조끼를 항시 착용하시고, 안전 수칙을 준수해주세요.",
          "- 카약 탑승 및 하차 시에 바닥이 미끄러우니 주의해주세요.",
        ]}
      />
      <Margin height="16" />
      <QuickLink
        text="인경호 위치 확인하기"
        moveTo={() => window.open("https://goo.gl/maps/rgHWiKNdCSbEUzdBA")}
      />
      <Margin height="122" />

      <Separator />
      <Typography header>비룡제 스탬프 투어 안내</Typography>
      <Margin height="8" />
      <TextBox
        notmove
        notitle
        detail={[
          "비룡제를 즐기며 팜플렛에 있는 스탬프 판에 스탬프를 모두 모아보세요.",
          "스탬프를 모두 모으시면 선착순으로 희망하는 굿즈로 교환할 수 있어요.",
        ]}
      />
      <TextBox
        notmove
        title="스탬프 위치"
        detail={[
          "1. 대한항공 우남호 포토존",
          "2. B존 부스",
          "3. A존 부스",
          "4. 하와이안 포토존",
        ]}
      />
      <TextBox
        notmove
        title="스탬프 미션"
        detail={[
          "1. 대한항공 우남호 포토존 사진 촬영하기",
          "2. B존 부스 1개 이상 이용하기",
          "3. A존 부스 3개 이상 이용하기",
          "4. 하와이안 포토존에서 사진 촬영하기",
        ]}
      />
      <TextBox
        notmove
        title="스탬프 굿즈 교환 진행 안내"
        detail={[
          "팜플렛 배부와 스탬프 교환은 B존 총학생회 서포터즈 부스에서 진행합니다.",
          "총 7종의 굿즈가 준비되어 있으며 한정 수량, 선착순 배부로 진행됩니다.",
          "B존 부스 위치는 인하대학교 정석학술정보관 뒤편입니다.",
        ]}
      />
      <Margin height="122" />

      <Separator />
      <Typography header>비룡제 서포터즈 부스 미니게임</Typography>
      <Margin height="8" />
      <TextBox
        notmove
        notitle
        detail={[
          "비룡제 서포터즈 부스에서 총 3가지의 미니게임을 진행합니다.",
          "미니게임에 승리하실 때 마다 상품 추첨권을 드립니다.",
          "해당 추첨권을 두장 모으시면 굿즈를 뽑아가실 수 있습니다.",
          "B존 부스 위치는 인하대학교 정석학술정보관 뒤편입니다.",
        ]}
      />
      <Margin height="16" />
      <QuickLink
        text="정석학술정보관 위치 확인하기"
        moveTo={() => window.open("https://goo.gl/maps/NhLrcSvQ3WDUx4jq5")}
      />
      <Margin height="122" />

      <Separator />
      <Typography header>통행 제한 구역 안내</Typography>
      <Margin height="8" />
      <TextBox
        notmove
        notitle
        detail={[
          "인하대학교 비룡제 기간동안 재학생 및 무대 안전을 위해 일부 캠퍼스 내 구역의 통행을 금지합니다.",
        ]}
      />
      <TextBox
        notmove
        title="통행 제한 구역과 제한 사유"
        detail={[
          "1. 인하대역 4번 출구 ↔ 인하대학교 대운동장 통로 (보도)",
          "2. 인하대학교 학군단 ↔ 인하대학교 대운동장 사이 구역 (비룡제 기간 무대 뒤편)",
          "",
          "",
          "제한 사유 : 재학생 안전 확보, 무대 장비 및 설비 운용 간 안전 확보",
          "대체 통로 : 인하대역 3번 출구 – 캠퍼스 내 돌담길 – 테니스장/로스쿨 사잇길",
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

export default FestaInfo;
