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
                <h2>Spotify Track Player</h2>
                <a href='https://spotify-coding-bootcamp.firebaseapp.com/' target="_blank"><Img src="./Spotify.png"></Img></a>
                <p>Developed as a project during Concordia bootcamp program, working with Spotify's API, users can play the top 3 tracks for a designated artist and related artists.</p>
                <p>React, Styled Components, CSS, Redux, Node.js, Express.</p>
            </div>
            <div>
                <h2>Tic-Tac-Alien</h2>
                <a href='http://profuse-fireman.surge.sh/' target="_blank"><Img src="./tictactoe.png"></Img></a>
                <p>Developed as a small personal project, users can pick a character and play against the alien in a game of "tic-tac-toe".</p>
                <p>React, Styled Components, CSS.</p>
            </div>
        </StyledMain>
    </MainWrapper>
    )
}


export default Main;


const StyledMain = styled.div`
display: grid;
grid-template-columns: auto auto;
    h2 {
        padding-top: 2rem;
        text-align: center;
        font-size:2.5rem;
        font-weight: bolder;
    }

    a {
        display: flex;
        justify-content: center;
    }
    div {
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
        margin: 1rem;
        text-align: center;
        p{
            font-size: 1.8rem;
        }
    }

@media screen and (max-width: 1000px) {
grid-template-columns: 100%;

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
    padding: 2rem;
}
p{
    padding: 1.2rem;
    font-size: 2rem;
    line-height: 2;
}

@media screen and (max-width: 1000px) {
h1 {
    font-size: 3rem;
    padding: 1.5rem;
}
}
`
const StyledH1 = styled.div`
background-image: linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%);
margin-top: 5rem;
border-radius: 10px;
`

const Img = styled.img`
width:350px;
height: 350px;
padding: 30px;

@media screen and (max-width: 768px) {
width:300px;
height: 300px;
padding: 20px;

}
@media screen and (max-width: 420px) {
width:200px;
height: 200px;
padding: 10px;

}


`
