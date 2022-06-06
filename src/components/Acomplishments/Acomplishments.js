import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { aboutData } from '../../constants/constants';


const Acomplishments = () => (
  <Section id="about">
    <SectionTitle>About me</SectionTitle>
    <SectionText>From web development to scripting, object-oriented programming, database management and cloud computing, I've been developing since 2017. I love to acquire new skills and explore different areas of computing technology, and have a particular affinity for data science.</SectionText>
    <Boxes>
      {aboutData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <br />
          <BoxText><strong>{card.text0}</strong></BoxText>
          <BoxText>{card.text}</BoxText>
          <br />
          <BoxText>{card.text2}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
