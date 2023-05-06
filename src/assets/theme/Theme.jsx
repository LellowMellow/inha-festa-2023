const colors = {
  black: "#000000",
  darkGray: "#595959",
  gray: "#b3b3b3",
  lightGray: "#e6e6e6",
  white: "#ffffff",
  pink: "#AC41A1",
  purple: "#3F2F7C",
  green: "#36BE4C",
};

const font = {
  header: `
      font-family: 'pretendard-semibold';
      font-size: 24px;
      line-height: 29px;
      letter-spacing: -0.025em;
  `,
  title: `
    font-family: 'pretendard-semibold';
    font-size: 48px;
    line-height: 57px;
    letter-spacing: -0.025em;
  `,
  boxtitle: `
      font-family: 'pretendard-semibold';
      font-size: 20px;
      line-height: 19px;
      letter-spacing: -0.025em;
  `,
  boxtext: `
      font-family: 'pretendard-regular';
      font-size: 18px;
      line-height: 16px;
      letter-spacing: -0.025em;
  `,
};

const flex = {
  flexCenter: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  flexCenterColumn: `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
};

const animation = {
  box: { scale: 1.03, transition: { duration: 0.3 } },
};

const theme = {
  colors,
  font,
  flex,
  animation,
};

export default theme;
