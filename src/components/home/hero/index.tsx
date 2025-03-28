import { Carousel } from "antd";
import { hero_carousel } from "../../../utils";
import HeroItem from "./hero_item";

const Hero = () => {
  return (
    <Carousel autoplay>
      {hero_carousel.map((value) => (
        <HeroItem key={value.id} {...value} />
      ))}
    </Carousel>
  );
};

export default Hero;
