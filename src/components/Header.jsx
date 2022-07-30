import React from 'react'
import { Layout } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";

const {Header} = Layout;

const Links = styled("div")(({isActive})=>({
      width : 100,
      height : 50,
      backgroundColor: 'red',
      display: 'flex',
      alignItems : 'center',
      justifyContent : 'center',
      cursor : 'pointer',
      borderRadius : 8,
     
      ":hover": {
       backgroundColor : 'rgba(255, 255, 255, 0.1)',
      
      },
      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.1)' : "inherit",

}));

const PageHeader = () => {
    const location =  useLocation();

  return (
    <Header style={{
        width : '100%',
        height : 80,
        
        position : 'fixed',
        top : 0,
        right: 0,
        zIndex : 10,
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        
        color: '#ffffff'
    }}>
      <div style={{
          width: 600,
          height: '100%',
          display : 'flex',
          alignItems: 'center',
          justifyContent : 'space-evenly',
          
      }}>
      <MenuLinks isActive={location.pathname === '/'} text='Products' path='/' />
      <MenuLinks isActive={location.pathname === '/about'} text='About Us' path='/about' />
      <MenuLinks isActive={location.pathname === '/contact'} text='Contact Us' path='/contact' />
      </div>
        
    </Header>
  )
}


const MenuLinks = ({text,path,isActive}) =>{

  const navigate = useNavigate();

  return (
    <Links 
      isActive={isActive}
      onClick={()=>navigate(path)}
    >
        {text}
    </Links>
  )
}

export default PageHeader