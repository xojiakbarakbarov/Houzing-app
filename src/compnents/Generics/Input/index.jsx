import React from "react";
import { Container } from "./style";

const Input = ({
  type,
  onChange,
  placeholder,
  name,
  value,
  defaultValue,
  width,
  height,
  icon
}) => {
    return (
  
<Container
icon={icon}
placeholder={placeholder}
  type={type}
  onChange={onChange}
  name={name}
  value={value}
  defaultValue={defaultValue}
  width={width}
  height={height}
>
</Container>

 
   
  );
};

export default Input;
