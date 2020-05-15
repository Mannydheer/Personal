import React, { useEffect } from 'react'
import styled from 'styled-components';

const Message = ({ message, setTimer }) => {

    useEffect(() => {

        let timer = setTimeout(() => {
            setTimer(false)
        }, 8000);

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <StyledMessage>
            {message}
        </StyledMessage>
    )
}

export default Message;

const StyledMessage = styled.div`
text-align: center;
font-size: 2rem;
font-weight: bold;
margin-top: 1.5rem;

`
