import { NavLink } from "react-router-dom";
import styled from "styled-components";

 const Container = styled.div`
 display:flex; 
 flex-direction:column;
 justify-content:center;

 `;
 const Warapper=styled.div`
 display:flex; 
 align-items:center;
 justify-content:space-between ;
 background: var(--colorPrimary);  
 color: #ffff;
 padding: var(--padding);
 height: 64px; 
max-width:1440px;
 font-size:16px;
 `;
 const Section = styled.div`
 display:flex;
 aligin-items:center;
 cursor:${({logo})=> logo && 'pointer'};
 .active{
    color:#b8ff06 
 }

 `
const Logo=styled.img`

`
const Link = styled(NavLink)`
text-decoration:none;
padding:0 32px;
color:#ffff
`

 export {Container,Warapper,Section,Logo, Link}