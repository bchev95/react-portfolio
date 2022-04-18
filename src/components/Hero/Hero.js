import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { ExternalLinks } from '../Projects/ProjectsStyles';


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
        <Button>Full Resume
          <ExternalLinks href={"https://google.com"}>Full Resume</ExternalLinks>
        </Button>
      
    </LeftSection>
  </Section>
);

export default Hero;