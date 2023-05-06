import styled from "styled-components";
import Layout from "../../component/Layout/Layout";
import Separator from "../../component/Separator/Separator";
import Margin from "../../component/Margin/Margin";
import Typography from "../../component/Typography/Typography";
import TextBox from "../../component/TextBox/TextBox";
import QuickLink from "../../component/QuickLink/QuickLink";

const BoothInfo = () => {
  return (
    <Layout>
      <Margin height="122" />
      <Separator />
      <Typography header>축제 부스 안내</Typography>
      <Margin height="122" />

      <Typography header color="gray">
        COMING SOON
      </Typography>

      <Margin height="122" />
      <Separator />
      <Typography header>푸드트럭 안내</Typography>
      <Margin height="122" />

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

export default BoothInfo;
