import React from 'react';
import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';
import NodeJs from '../../Images/node-js.svg'
import Css from '../../Images/css.svg'
import Javascript from '../../Images/javascript.svg'
import MongoDb from '../../Images/mongodb.svg'





const Skills = () => {
    return (
        <AboutWrapper>
            <StyledH1>
                <h1 id="Skills">Skills.</h1>
            </StyledH1>
            <FlexTextIcon>
                <TextWrapper>
                    <div>
                        <h2>Front End Development:</h2>
                        <p>React.js, Redux, HTML, CSS, JavaScript ES6</p>
                    </div>
                    <div>
                        <h2>Back End Development:</h2>
                        <p>Node.js, Express, MongoDb.</p>
                    </div>
                    <div>
                        <h2>Developper Tools:</h2>
                        <p> Visual Studio Code, terminal, github, git. </p>
                    </div>
                </TextWrapper>
                <Icons>
                    <StyledReact />
                    <img src={NodeJs}></img>
                    <img src={Css}></img>
                    <img src={Javascript}></img>
                    <img src={MongoDb}></img>
                </Icons>
            </FlexTextIcon>


        </AboutWrapper>


    )
}

export default Skills;

const AboutWrapper = styled.div`

width: 80%;
margin: 0 auto;
h1 {
    background-color: rgba(0,0,0,0.4) !important;
    color: white;
    border-radius: 10px;
    text-align: center;
    font-size: 5rem;
    font-weight: 900;
    padding-top: 3rem;
    padding-bottom: 1.5rem;

}
@media screen and (max-width: 1000px) {
    h1 {
    font-size: 3rem;
    padding: 1.5rem;
}
}

@media screen and (max-width: 600px) {
}

`
const TextWrapper = styled.div`
padding: 3rem;
width: 50%;
h2 {
    font-size: 3rem;
    font-weight: bolder;
}
p {
    font-size: 1.8rem;
}
@media screen and (max-width: 1000px) {
width: 100%;
text-align: center;

}

`

const StyledH1 = styled.div`
background-image: linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%);
margin-top: 5rem;
border-radius: 10px;

`

const Icons = styled.div`
width: 50%;
display: flex;
flex-flow: wrap;
align-items: center;
img {
    width: 10rem;
    height: 10rem;
    margin: 2rem;
}

@media screen and (max-width: 1000px) {
width: 100%;
justify-content: space-evenly;
img {
    width: 8rem;
    height: 8rem;
    margin: 1rem;
}
}
`

const FlexTextIcon = styled.div`
display: flex;
@media screen and (max-width: 1000px) {
display: block;

}
`
const StyledReact = styled(FaReact)`
width: 10rem;
height: 10rem;
color: rgb(97, 219, 292)
`
