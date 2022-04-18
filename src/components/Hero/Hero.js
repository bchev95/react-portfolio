import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection} from './HeroStyles';


const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm <br/>
        Brett Chevalier
      </SectionTitle>
      <SectionText>
      I love building applications, learning new technologies, and incorporating data wherever possible!
      </SectionText>
        <Button>
          <a href={"https://drive.google.com/file/d/1hATz_cqT47HsOvSo9ZcBdCDkzjgPbFnl/view?usp=sharing"} style={{color: 'white'}}>Full Resume</a>
        </Button>
      
    </LeftSection>
  </Section>
);

export default Hero;