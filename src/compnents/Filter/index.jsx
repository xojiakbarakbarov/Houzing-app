import React, { useRef } from "react";
import { Container, MenuWrapper, Section } from "./style";
import { Input, Button } from "../Generics";
import Settings from "../../assets/icon/setting-lines.svg";
import Search from "../../assets/icon/001-loupe.svg";

// import "antd/dist/antd.css";
import { Dropdown } from "antd";

const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();
  const minPriceRef = useRef();
  const maxPriceRef = useRef();
  return (
    <Container>
      <Input
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      ></Input>
      <Dropdown
        dropdownRender={() => {
          return (
            <MenuWrapper>
              <h3 className="subTitle">Address</h3>
              <Section>
                <Input ref={countryRef} placeholder={"Country"} />
                <Input ref={regionRef} placeholder={"Region"} />
                <Input ref={cityRef} placeholder={"City"} />
                <Input ref={zipRef} placeholder={"Zip code"} />
              </Section>
              <h3 className="subTitle"> Apartment info</h3>
              <Section>
                <Input ref={roomsRef} placeholder={"Rooms"} />
                <Input ref={sizeRef} placeholder={"Size"} />
                <Input ref={sortRef} placeholder={"Sort"} />
              </Section>
              <h3>Price</h3>
              <Section>
                <Input ref={minPriceRef} placeholder={"Min price"} />
                <Input ref={maxPriceRef} placeholder={"Max price"} />
              </Section>
            </MenuWrapper>
          );
        }}
      >
        <div>
          <Button type={"light"}>
            <img style={{ height: "20px", width: "20px" }} src={Settings} />{" "}
            Advansed
          </Button>
        </div>
      </Dropdown>

      <Button>
        <img src={Search} alt="" /> Search
      </Button>
    </Container>
  );
};

export default Filter;
