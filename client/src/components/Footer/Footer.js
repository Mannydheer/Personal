import React, { useState } from 'react'
import styled from 'styled-components';
import { FaArrowDown, FaCopyright, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect } from 'react';

const Footer = () => {
    return (
        <FooterWrapper>
            <h4>Live, Learn and Code.</h4>
            <h5>Stepping out of your comfort zone, is the only way to grow.</h5>
            <h5>Visit my work!</h5>
            <DownwardArrow />
            <SocialMedia>
                <a href='https://github.com/Mannydheer'>
                    <StyledGithub />
                </a>
                <a href='https://www.linkedin.com/in/manny-dheer-aa2576141/'>
                    <StyledLinkedIn />
                </a>
            </SocialMedia>
            <TextWrapper>
                <h6>Coded by myself </h6>
                <div>                <CopyRight />
                </div>
                <h6>Manny.</h6>
            </TextWrapper>
        </FooterWrapper >
    )
}

export default Footer;

const FooterWrapper = styled.footer`
background-color: rgb(20,28,58);
height: 40vh;

h4, h5{
    color: white;
    text-align: center;
    padding-top: 3rem;
}
h4 {
    font-size: 3rem;
}
h5 {
    font-size: 2rem;
}
@media screen and (max-width: 1000px) {
   
}
`

const DownwardArrow = styled(FaArrowDown)`
color: white;
margin-top: 2rem;
font-size: 3rem;
width: 100%;

&:hover {
    transform: translate(0px, 3px);
    transition-duration: 0.3s;
    cursor: pointer;
}




`
const CopyRight = styled(FaCopyright)`
color: white;
margin: 0 1rem;

`
const TextWrapper = styled.div`
display: flex;
padding: 1rem;
color: white;
font-size: 2rem;
justify-content: center;
`
const SocialMedia = styled.div`
display: flex;
font-size: 4rem;
justify-content: center;
a {
    color: white;
    padding: 10px;
}
`
const StyledGithub = styled(FaGithub)`
&:hover {
    cursor: pointer;
}
`
const StyledLinkedIn = styled(FaLinkedin)`
&:hover {
    cursor: pointer;
}
`