import React, { useRef } from "react";
import { Container, Arrow, Img } from "./style";
import { Carousel } from "antd";
import carouselImg from "../../assets/icon/right-arrow 1 (1).svg";
import house1 from "../../assets/images/house1.png";
import house2 from "../../assets/images/house2.png";
import house3 from "../../assets/images/house3.png";
const contentStyle = {
  margin: 0,

  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

const GenCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const slider = useRef();

  const onMove = ({ target }) => {
    if (target.getAttribute("name") === "next") slider.current.next();
    if (target.getAttribute("name") === "prev") slider.current.prev();
  };
  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <div>
          <Img src={house1} />
        </div>
        <div>
          <Img src={house2} />
        </div>
        <div>
          <Img src={house3} />
        </div>
      </Carousel>

      <Arrow name="prev" onClick={onMove}>
        <img
          style={{
            width: "12px",
            height: "12px",
            color: "white",
          }}
          src={carouselImg}
          alt=""
        />
      </Arrow>
      <Arrow onClick={onMove} name="next" next="true" left>
        <img
          style={{
            width: "12px",
            height: "12px",
            color: "white",
            transform: "rotate(180deg)",
          }}
          src={carouselImg}
          alt=""
        />
      </Arrow>
    </Container>
  );
};

export default GenCarousel;
