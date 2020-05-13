import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import RightNav from './RightNav';

const Burger = () => {
    const [open, setOpen] = useState(false)

    const handleWindowResize = () => {
        if (window.innerWidth > 768) {
            setOpen(false)
        }
    }


    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])


    return (<>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
        <RightNav setOpen={setOpen} open={open}></RightNav>
    </>
    )
}
export default Burger;

const StyledBurger = styled.div`
@media (max-width: 768px) {
    width: 5rem;
height: 4rem;
position: fixed;
top: 15px;
right: 20px;
display: flex;
justify-content: space-around;
flex-flow: column nowrap;
z-index: 1100;

div {
    width: 4rem;
    height: 1rem;
    background-color: ${({ open }) => open ? 'white' : 'rgb(20,28,58)'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.5s;
    position: relative;
    

/* grab the first child of the div. */
    &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};

    }
    &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'}
    }
}
}

`
