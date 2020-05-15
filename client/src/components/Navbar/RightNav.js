import React, { useEffect } from 'react'
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useHistory } from 'react-router-dom';
import developper from '../../Images/developper.svg'


const RightNav = ({ setOpen, open }) => {

    return (
        <div>
            <StyledNav>
                <StyledManny><a href="#home">Manny.</a></StyledManny>

                <Ul open={open}>
                    <li onClick={() => setOpen(false)}><AnchorLink href="#home">Home</AnchorLink></li>
                    <li onClick={() => setOpen(false)}><AnchorLink href="#projectLink">Projects</AnchorLink></li>
                    <li onClick={() => setOpen(false)}><AnchorLink href="#Skills">Skills</AnchorLink></li>
                    <li onClick={() => setOpen(false)}><AnchorLink href="#Contact">Contact</AnchorLink></li>
                </Ul>
            </StyledNav>
            <Styledheader id="home">
                <StyledAbout>
                    <h2>Hi, I'm Manny. I'm a full stack developer. </h2>
                    <h3>Based in Montreal, Qc. I have a passion for both front and backend development. Currently I'm looking for new opportunities! Eager to work, learn and continue unfolding my programming passion! </h3>
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
                    <ProfileImg src={developper}></ProfileImg>
                </Desc>

            </Styledheader>

        </div>
    )
}

export default RightNav



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

`
const Ul = styled.ul`
display: flex;
list-style: none;
/* Media Query for right nav pop. */
@media screen and (max-width: 768px) {
display: block;
background-color: rgba(0,0,1,0.7) !important;
position: fixed;
transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
top: 0;
right: 0;
height: 100vh;
width: 50vw;
padding-top: 3.5rem;
transition: transform 0.3s ease-in-out;
li {
    font-size: 4rem;
    position: relative;
    margin: 2rem;
    top: 20vh;
    font-weight: 900;
}
}
/*  */

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
    margin-top: 2rem;   
    width: 20%; 
 }
 @media screen and (max-width: 800px) {
    margin-top: 2rem;   
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
height: 400px;
width: 400px;

@media screen and (max-width: 1000px) {
height: 230px;
width: 230px;       
 }

 @media screen and (max-width: 800px) {
height: 230px;
width: 230px;       
 }

`