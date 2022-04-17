import React from 'react';
import { DiDatabase, DiTerminal} from 'react-icons/di';
import {VscLibrary} from 'react-icons/vsc';
import{HiOutlineCode} from 'react-icons/hi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle><br/>Technologies</SectionTitle>
    <SectionText>
      I have experience with a broad range of computing technologies, here are some of them.
    </SectionText>
    <List>
      <ListItem>
        <HiOutlineCode size="3rem" />
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Python <br/>
            JavaScript <br/>
            C/C++ <br/>
            Java <br/>  
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <VscLibrary size="3rem" />
        <ListContainer>
          <ListTitle>Libraries</ListTitle>
          <ListParagraph>
            React.js <br />
            Node.js <br />
            Scikit-learn <br/> 
            Matplotlib<br/>          
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            MySQL, PostgreSQL <br/>
            MongoDB <br/>
            AWS <br/>
            IBM Cloud <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiTerminal size="3rem" />
        <ListContainer>
          <ListTitle>Other Technologies</ListTitle>
          <ListParagraph>
            Git <br/>
            Docker <br/>
            Tableau <br/>
            Jupyter <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
