import React from 'react'
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Burger from './Burger';



const Navbar = () => {
    return (<Wrapper>
        {/* BURGER */}
        <Burger></Burger>
    </Wrapper>
    )
}

export default Navbar;


const Wrapper = styled.div`
font-size: 1.5em;
justify-content: center;
width: 80%;
margin: 0 auto;
height: 100vh;
`

// const StyledManny = styled.div`
// a {
//     color: white;
//     text-decoration: none;
// }
// `
// const StyledNav = styled.nav`
// font-size: 1.3em;
// width: 100%;
// display: flex;
// justify-content: space-between;
// padding: 20px 0;

// ul {
//     display: flex;
//     list-style: none;

// @media screen and (max-width: 768px) {
// display: none;
// }
// }
// li {
//     padding-right: 4rem;
// }
// a {
//     color: white;
//     text-decoration: none;

//     &:after {
//     content: '';
//     display: block;
//     width: 0%;
//     height: 2px;
//     background: white;
//     }
//     &:hover:after {

//     width: 100%;
//     transition:.3s;
//     }
// }



// `
// const Desc = styled.div`
// width: 40%;
// height: 80vh;
// display:flex;
// justify-content: center;
// align-items: center;
// `

// const SocialMedia = styled.div`
// display: flex;
// font-size: 5rem;
// width: 10%;
// justify-content: space-between;
// a {
//     color: white;
// }
// @media screen and (max-width: 1000px) {
//     margin-top: 5rem;   
//     width: 20%; 
//  }
//  @media screen and (max-width: 800px) {
//     margin-top: 5rem;   
//     width: 30%; 
//  }


// `
// const StyledGithub = styled(FaGithub)`
// &:hover {
//     cursor: pointer;
// }
// `
// const StyledLinkedIn = styled(FaLinkedin)`
// &:hover {
//     cursor: pointer;
// }
// `

// const StyledAbout = styled.div`
// color: white;
// width: 50%;
// h2 {
//     font-size: 5rem;
//     border-radius: 25px;
// }
// h3 {
//     padding-top: 2rem;
//     line-height: 2;
// }
// @media screen and (max-width: 1000px) {
//     width: 100%;               
// }
// `
// const Styledheader = styled.header`
// display: flex;
// justify-content: center;
// align-items: center;
// height: 80vh;

// @media screen and (max-width: 1000px) {
// margin-top: 10rem;
// flex-flow: column;   
// }
// @media screen and (max-width: 420px) {                  
// }
// `
// const ProfileImg = styled.img`
// height: 40vh;
// border-radius: 25px;
// border: 4px white solid;

// @media screen and (max-width: 768px) {
//     height: 30vh;

//  }
//  @media screen and (max-width: 420px) {

//  }

// `