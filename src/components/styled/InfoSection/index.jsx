import React from 'react'
import { AboutP, AboutTitle, DividerContainer, DividerContainer2, ImageBg, InfoContainer } from './InfoElements'
import Logo from '../../../images/bglogo.jpg'

const InfoSection = () => {
  return (
    <InfoContainer id="about">
      <DividerContainer>
          <AboutTitle>
            About
          </AboutTitle>
          <AboutP>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque facere magnam deleniti architecto odit doloremque tempora fugiat, quo quia blanditiis ex, ipsam nesciunt totam ipsa? Culpa placeat quos similique iusto.
          </AboutP>
      </DividerContainer>
      <DividerContainer2>
       <ImageBg src={Logo} />
      </DividerContainer2>
    </InfoContainer>
  )
}

export default InfoSection