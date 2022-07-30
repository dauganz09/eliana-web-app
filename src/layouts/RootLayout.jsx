import React from 'react'
import {Layout} from 'antd';
import PageHeader from '../components/Header';
import { Outlet } from 'react-router-dom';
const {  Content, Footer } = Layout;

function RootLayout() {
    return (
      <Layout style={{
          height: '100vh',
          paddingTop: 80,
         
        }}>
        <PageHeader/>
        <Content
          style={{
            padding: '20px 50px',
            minWidth : '1510px',
            height : '100vh',
           
            margin : '0 auto',
            backgroundColor : '#ffffff'
            
            
    
          }}
        >
         
          <Outlet/>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          ©2022
        </Footer>
      </Layout>
    )
  }
  
  export default RootLayout