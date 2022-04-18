import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key ={id}>
            <Img src={image}/>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <br/>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}>Code</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
      <div>
        <br/>
          <p style={{textAlign: "center"}}>More projects available on my <a href={"https://github.com/bchev95"} style={{color: 'aqua'}}>Github profile</a></p>
      </div>
  </Section>
);

export default Projects;