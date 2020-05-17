import React, { useState } from 'react'
import styled from 'styled-components';
import Message from './Message';
import ReCaptcha from 'react-google-recaptcha';
const axios = require('axios');





const Form = () => {

    const [state, setState] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [message, setMessage] = useState(null)
    //timer for messagge.
    let [timer, setTimer] = useState(false);
    const [robot, setRobot] = useState(null);
    const onChange = (value) => {
        setRobot(value)
    }

    console.log(robot, 'robot')



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (robot !== null) {
            if (state.name !== '' && state.email !== '' && state.message !== '') {
                try {

                    let response = await fetch('https://us-central1-mannydheer-65e48.cloudfunctions.net/handleMail', {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(state)
                    })
                    let contactResponse = await response.json();
                    console.log(contactResponse)
                    if (contactResponse.status === 200) {
                        setMessage(contactResponse.message)
                        setState({
                            ...state,
                            name: '',
                            email: '',
                            message: ''
                        })
                        setTimer(true)
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
                setMessage('Please fill out all fields.')
                setTimer(true)
            }
        }
        else {
            setMessage("Please verify that you are not a robot.")
            setTimer(true)
        }
    }
    return (


        <StyledForm onSubmit={handleSubmit}>
            <div>
                <label id="name">Name</label>
                <textarea
                    required
                    value={state.name}
                    onChange={(e) => setState({
                        ...state,
                        name: e.target.value
                    })}
                    style={{ resize: 'none' }}
                    id="name" type="text"></textarea>
            </div>
            <div>
                <label id="email">Email</label>
                <input
                    value={state.email}
                    required
                    onChange={(e) => setState({
                        ...state,
                        email: e.target.value
                    })}
                    style={{ resize: 'none' }}
                    id="email"
                    type="email"
                    label="Email Address"
                    autoComplete="email"
                ></input>
            </div>
            <div>
                <label id="message">Message</label>
                <textarea
                    required
                    onChange={(e) => setState({
                        ...state,
                        message: e.target.value
                    })}
                    value={state.message}
                    style={{ height: '15rem', resize: 'vertical' }}
                    id="message" type="text"></textarea>
            </div>

            <ReCaptcha
                style={{ display: "inline-block", width: '80%', margin: '0 auto' }}
                onChange={onChange}
                sitekey="6LfdcfgUAAAAAAoXX70NCs1EV7GoqezHL-Ew4_AU"
            ></ReCaptcha>


            <button type="submit">Submit</button>
            {timer && <Message message={message} setTimer={setTimer} />}

        </StyledForm>

    )
}

export default Form;

// const StyledReCaptcha = styled.div`


// `

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
div input {
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
    justify-content: center;
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


@media screen and (max-width: 768px) {
width: 100%;

button {
    margin-bottom: 1.1rem;
    
    
}
}


`
