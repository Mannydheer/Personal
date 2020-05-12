import React from 'react'
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Navbar = () => {
    return (<Wrapper>
        <StyledNav>
            <StyledManny><a href="#home">Manny.</a></StyledManny>
            <ul>
                <li><AnchorLink href="#home">Home</AnchorLink></li>
                <li><AnchorLink href="#projectLink">Projects</AnchorLink></li>
                <li><AnchorLink href="#Skills">Skills</AnchorLink></li>
                <li><AnchorLink href="#Contact">Contact</AnchorLink></li>
                <li><AnchorLink href="#Contact">Contact</AnchorLink></li>


            </ul>
        </StyledNav>
        <Styledheader id="home">
            <StyledAbout>
                <h2>Hi, I'm Manny. I'm a full stack developer. </h2>
                <h3>Based in Montreal, Qc. I have a passion for both front and backend development. Solving Problems and creating beautiful designs.</h3>
            </StyledAbout>
            <SocialMedia>
                <a href='https://github.com/Mannydheer' target="_blank">
                    <StyledGithub />
                </a>
                <a href='https://www.linkedin.com/in/manny-dheer/' target="_blank">
                    <StyledLinkedIn />
                </a>
            </SocialMedia>
            <Desc>
                <ProfileImg src='./Manny.jpeg'></ProfileImg>
            </Desc>

        </Styledheader>
        <AboutMe></AboutMe>


    </Wrapper>


    )
}

export default Navbar;
const AboutMe = styled.div`


`


const Wrapper = styled.div`
font-size: 1.5em;
justify-content: center;
width: 80%;
margin: 0 auto;
height: 100vh;

`

const StyledManny = styled.div`
a {
    color: white;
    text-decoration: none;
}
`
const StyledNav = styled.nav`
font-size: 1.3em;
width: 100%;
display: flex;
justify-content: space-between;
padding: 20px 0;

ul {
    display: flex;
    list-style: none;
}
li {
    padding-right: 4rem;
}
a {
    color: white;
    text-decoration: none;

    &:after {
    content: '';
    display: block;
    width: 0%;
    height: 2px;
    background: white;
    }
    &:hover:after {

    width: 100%;
    transition:.3s;
    }
}



`
const Desc = styled.div`
width: 40%;
height: 80vh;
display:flex;
justify-content: center;
align-items: center;
`

const SocialMedia = styled.div`
display: flex;
font-size: 5rem;
width: 10%;
justify-content: space-between;
a {
    color: white;
}
@media screen and (max-width: 1000px) {
    margin-top: 5rem;   
    width: 20%; 
 }
 @media screen and (max-width: 800px) {
    margin-top: 5rem;   
    width: 30%; 
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

const StyledAbout = styled.div`
color: white;
width: 50%;
h2 {
    font-size: 5rem;
    border-radius: 25px;
}
h3 {
    padding-top: 2rem;
    line-height: 2;
}
@media screen and (max-width: 1000px) {
    width: 100%;               
}
`
const Styledheader = styled.header`
display: flex;
justify-content: center;
align-items: center;
height: 80vh;

@media screen and (max-width: 1000px) {
margin-top: 10rem;
flex-flow: column;   
}
@media screen and (max-width: 420px) {                  
}
`
const ProfileImg = styled.img`
height: 40vh;
border-radius: 25px;
border: 4px white solid;

@media screen and (max-width: 768px) {
    height: 30vh;
           
 }
 @media screen and (max-width: 420px) {
                  
 }

`