import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';



const Main = () => {


    return (<MainWrapper>
            <StyledH1>
        <h1 id="projectLink">My Recent Projects.</h1>
        </StyledH1>
        <p>Recent graduate from Concordia Bootcamps. Fell in love with programming and developped skills in React, Node.js, Javascript, HTML5,CSS and MongoDb.
        Currently I'm looking for new opportunities! Eager to work, learn and continue unfolding my programming passion!
    
        </p>
        <StyledMain>
            <div>
                <h2>Fruit Emporium</h2>
                <a href='http://tranquil-sister.surge.sh/' target="_blank"><Img src="./fruit.png"></Img></a>
            </div>
            <div>
                <h2>Tic-Tac-Alien</h2>
                <a href='http://profuse-fireman.surge.sh/' target="_blank"><Img src="./tictactoe.png"></Img></a>
            </div>
        </StyledMain>
    </MainWrapper>
    )



}


export default Main;


const StyledMain = styled.div`
   display: grid;

    /* grid-template-columns: repeat(auto-fill, minmax(150px, 310px)); */
    grid-template-columns: auto auto;

    h2 {
        text-align: center;
        font-size:3rem;
    }

`
const MainWrapper = styled.main`
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
p{
    padding: 1.2rem;
    font-size: 2rem;
    line-height: 2;
}
`

const StyledH1 = styled.div`
background-image: linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%);
margin-top: 5rem;
border-radius: 10px;
`

const Img = styled.img`
width: 100%;
height: 50vh;
padding: 30px;

&:hover {
   

}
`
