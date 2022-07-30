import React from 'react'
import { HeroBg,HeroContainer,VideoBg,HeroContent,HeroH1, HeroH2 } from './HeroElements'
import Video from '../../../videos/videobg.mp4'


const HeroSection = () => {
  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH2>Welcome to </HeroH2>
          <HeroH1>Eliana Rapha Mineral Trading</HeroH1>
        </HeroContent>
    </HeroContainer>
  )
}


export default HeroSection