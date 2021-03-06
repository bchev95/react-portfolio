import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import {FaLaptopCode} from 'react-icons/fa';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href ="/react-portfolio">
        <a style={{display: "flex", alignItems: "center", color: 'white', marginBottom: 20}}>
          <FaLaptopCode size="3rem" style={{marginRight: 20}}/> 
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="https://bchev95.github.io/react-portfolio/#projects">
          <a style={{display: "flex", color: 'white'}}> <Span>Projects</Span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://bchev95.github.io/react-portfolio/#tech">
        <a style={{display: "flex", color: 'white'}}> <Span>Technologies</Span>
        </a>
        </Link>
      </li>
      <li>
        <Link href="https://bchev95.github.io/react-portfolio/#about">
        <a style={{display: "flex", color: 'white'}}> <Span>About</Span>
        </a>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/bchev95">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/b-chevalier">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="mailto:brett.chevalier@gmail.com">
        <AiOutlineMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
 
);

export default Header;
