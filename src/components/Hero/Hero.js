import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, ResumeButton} from './HeroStyles';



const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm <br/>
        Brett Chevalier
      </SectionTitle>
      <SectionText>
      I love building applications, learning new technologies, and incorporating data wherever possible. Currently a Software Development Engineer on the RocketCyber team at Kaseya!
      </SectionText>   
      <ResumeButton href={"https://drive.google.com/file/d/1hATz_cqT47HsOvSo9ZcBdCDkzjgPbFnl/view?usp=sharing"}> 
        Full Resume
      </ResumeButton>
    </LeftSection>
  </Section>
);

export default Hero;