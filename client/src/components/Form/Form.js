import React, { useState } from 'react'
import styled from 'styled-components';




const Form = () => {

    const [state, setState] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [message, setMessage] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (state.name !== '' && state.email !== '' && state.message !== '') {
            try {
                let response = await fetch('/submitInfo', {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(state)
                })
                let contactResponse = await response.json();
                if (contactResponse.status === 200) {
                    setMessage(contactResponse.message)
                }
                else {
                    return;
                }
            }
            catch (err) {
                console.log(err, 'inside catch')
            }
        }
        else {
            console.log('please fill out all fields.')
        }
    }


    return (
        <StyledForm onSubmit={handleSubmit}>
            <div>
                <label id="name">Name</label>
                <textarea
                    onChange={(e) => setState({
                        ...state,
                        name: e.target.value
                    })}
                    style={{ resize: 'none' }}
                    id="name" type="text"></textarea>
            </div>
            <div>
                <label id="email">Email</label>
                <textarea
                    onChange={(e) => setState({
                        ...state,
                        email: e.target.value
                    })}
                    style={{ resize: 'none' }}
                    id="email" type="email"></textarea>
            </div>
            <div>
                <label id="message">Message</label>
                <textarea
                    onChange={(e) => setState({
                        ...state,
                        message: e.target.value
                    })}
                    style={{ height: '15rem', resize: 'vertical' }}
                    id="message" type="text"></textarea>
            </div>
            <button type="submit">Submit</button>
            {message && <div>{message}</div>}
        </StyledForm>
    )
}

export default Form;

const StyledForm = styled.form`
display: flex;
flex-flow: wrap column;
width: 80%;
margin: 0 auto;

div textarea  {
    outline: none;
    font-size: 2rem;
    font-family: 'Comfortaa', cursive;
    border: solid black 1px;


}
div label {
    text-align: center;
    font-size: 2rem;
}

div {
    display: flex;
     flex-flow: wrap column;
}

button {
    background-image: linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%);
    width: 50%;
    margin: 0 auto;
    padding: 1.2rem;
    margin-top: 1.1rem;
    border-radius: 25px;
    color: white;
    font-size: 2rem;
    transition-duration: 0.5s;
    outline: none;

    &:hover {
        opacity: 0.8;
        cursor: pointer;

        
    }
}



`
