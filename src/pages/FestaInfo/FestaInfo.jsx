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
      <Typography header>축제 안내</Typography>
      <Margin height="122" />

      <Typography header color="gray">
        COMING SOON
      </Typography>
      <Margin height="122" />
      <QuickLink
        text="부스, 푸드트럭 확인하기"
        moveTo={() => navigate("/booth-info")}
      />
      <Margin height="122" />

      <Separator />
      <Typography header>공연 일정</Typography>
      <Margin height="8" />
      <TextBox
        notmove
        title="2023.05.17 WED"
        detail={[
          "xx:xx : 카더가든 - Car, the garden",
          "xx:xx : 헤이즈 - HEIZE",
          "xx:xx : 기리보이 - GIRIBOY",
        ]}
      />
      <TextBox
        notmove
        title="2023.05.18 THU"
        detail={[
          "xx:xx : 마크툽 - MAKTUB",
          "xx:xx : 빅나티 - BIG Naughty",
          "xx:xx : 싸이 - PSY",
        ]}
      />
      <TextBox
        notmove
        title="2023.05.19 FRI"
        detail={["xx:xx : 현아 - Hyun A", "xx:xx : 크러쉬 - Crush"]}
      />
      <Margin height="122" />

      <Separator />
      <Typography header>사전 티켓팅 안내</Typography>
      <Margin height="122" />
      <Typography header color="gray">
        2023.05.10 - 2023.05.12
      </Typography>
      <Margin height="8" />
      <Typography header color="gray">
        COMING SOON
      </Typography>
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
      <Margin height="122" />
    </Layout>
  );
};

export default FestaInfo;
