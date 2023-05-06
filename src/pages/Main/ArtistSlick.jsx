import styled from "styled-components";
import Slider from "react-slick";
import ArtistBox from "./ArtistBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mainSlick.css";

import Carthegarden from "./images/carthegarden.jpg";
import Heize from "./images/heize.jpg";
import Giriboy from "./images/Giriboy.jpg";
import Maktub from "./images/maktub.png";
import Bignaughty from "./images/bignaughty.jpg";
import Psy from "./images/psy.jpg";
import Hyuna from "./images/hyuna.jpg";
import Crush from "./images/crush.jpg";

const StyledSlider = styled(Slider)`
  width: 100%;
  max-width: 752px;
  height: 374px;
  border-radius: 24px;
  transition: 0.5s;
  background-color: ${(props) => props.theme.colors.black};
`;

const ArtistSlick = () => {
  const artistInfo = [
    {
      picture: Carthegarden,
      name: "카더가든 - Car, the garden",
      date: "2023.05.17 WED",
    },
    {
      picture: Heize,
      name: "헤이즈 - HEIZE",
      date: "2023.05.17 WED",
    },
    {
      picture: Giriboy,
      name: "기리보이 - GIRIBOY",
      date: "2023.05.17 WED",
    },
    {
      picture: Maktub,
      name: "마크툽 - MAKTUB",
      date: "2023.05.18 THU",
    },
    {
      picture: Bignaughty,
      name: "빅나티 - BIG Naughty",
      date: "2023.05.18 THU",
    },
    {
      picture: Psy,
      name: "싸이 - PSY",
      date: "2023.05.18 THU",
    },
    {
      picture: Hyuna,
      name: "현아 - Hyun A",
      date: "2023.05.19 FRI",
    },
    {
      picture: Crush,
      name: "크러쉬 - Crush",
      date: "2023.05.19 FRI",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    fade: true,
    arrows: false,
    slidesTosShow: 2,
    slidesToScroll: 1,
    dotsClass: "dots_custom_main",
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <StyledSlider {...settings}>
      {artistInfo.map((artist, idx) => (
        <ArtistBox
          key={idx}
          picture={artist.picture}
          name={artist.name}
          date={artist.date}
        />
      ))}
    </StyledSlider>
  );
};

export default ArtistSlick;
