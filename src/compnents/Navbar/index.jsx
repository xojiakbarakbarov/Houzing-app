import React from 'react'
import { Container, Section, Warapper , Logo , Link ,Main} from './style'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {navbar} from '../../utils/navbar'
import logoImg from  '../../assets/icon/logo.svg'
import Button from '../Generics/Button'
import Filter from '../Filter'
const Home = () => {
  const navigate=useNavigate()
  return (
   <Container>
    <Main>
     <Warapper>
      <Section onClick={()=>navigate('/home')} logo>
        <Logo src ={logoImg}/>
      </Section>
      <Section>
        {navbar.map(({title , path,hidden}, index)=>{
          return !hidden && <Link className={({isActive})=>isActive&&'active'} key={index} to={path}> {title } </Link>
        })}
      </Section>
      <Section>
        <Button type={'dark '} onClick={()=>navigate('/signin')}>Sign in</Button>
      </Section>
     </Warapper>
    </Main>
    <Filter/>
    <Outlet/>
   </Container>
  )
}

export default Home
