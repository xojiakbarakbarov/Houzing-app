import React from "react";
import { Container } from "./style";
import { Input, Button } from "../Generics";
import Settings from "../../assets/icon/setting-lines.svg";
import Search from "../../assets/icon/001-loupe.svg";
import Vector from "../../assets/icon/Vector.svg";

const Filter = () => {
  return (
    <Container>
      <Input
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      ></Input>

      <Button type={"light"}>
        <img style={{ height: "20px", width: "20px" }} src={Settings} />{" "}
        Advansed
      </Button>

      <Button>
        <img src={Search} alt="" /> Search
      </Button>
    </Container>
  );
};

export default Filter;
