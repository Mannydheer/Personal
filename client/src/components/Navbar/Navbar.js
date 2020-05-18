import React from 'react'
import styled from 'styled-components';
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