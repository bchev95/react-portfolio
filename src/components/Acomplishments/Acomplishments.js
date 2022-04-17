import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { aboutData } from '../../constants/constants';


const Acomplishments = () => (
  <Section>
    <SectionTitle>Education</SectionTitle>
    <Boxes>
      {aboutData.map((card, index) => (
        <Box key={index}>
       
          <BoxText>{card.text}</BoxText>
          <br />
          <BoxText>{card.uni}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
