import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { ExternalLinks } from '../Projects/ProjectsStyles';
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
      <Button onClick={() => window.location.href = 'https://drive.google.com/file/d/1hATz_cqT47HsOvSo9ZcBdCDkzjgPbFnl/view?usp=sharing'}>Full Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;