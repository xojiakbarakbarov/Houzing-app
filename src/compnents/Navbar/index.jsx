import React from 'react'
import { Container, Section, Warapper , Logo , Link} from './style'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {navbar} from '../../utils/navbar'
import logoImg from  '../../assets/icon/logo.svg'
const Home = () => {
  const navigate=useNavigate()
  return (
   <Container>
     <Warapper>
      <Section onClick={()=>navigate('/home')} logo>
        <Logo src ={logoImg}/>
      </Section>
      <Section>
        {navbar.map(({title , path}, index)=>{
          return <Link className={({isActive})=>isActive&&'active'} key={index} to={path}> {title } </Link>
        })}
        
      </Section>
      <Section>
        <button>Sing  in</button>
      </Section>
     </Warapper>
    <Outlet/>
   </Container>
  )
}

export default Home
