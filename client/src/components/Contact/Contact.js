import React from 'react'
import styled from 'styled-components';
import Form from '../Form';
import Email from '../../Images/email.svg'
const Contact = () => {
    return (
        <BigWrapper>
            <StyledH1 id="Contact">
                <StyledContactMe>Contact me.</StyledContactMe>
            </StyledH1>
            <ContactWrapper>
                <ReachMeWrapper>
                    <ReachOut>Reach out!</ReachOut>
                    <StyledText>If you'd like to get in touch to work on a project or have any questions, you can reach me by email!</StyledText>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={Email} alt="Email" />
                    </div>
                </ReachMeWrapper>
                <Form />
            </ContactWrapper>
        </BigWrapper>
    )
}

export default Contact

const BigWrapper = styled.div`
width: 80%;
margin: 0 auto;


`

const StyledContactMe = styled.h1`
background-color: rgba(0,0,0,0.4) !important;
color: white;
text-align: center;
font-size: 5rem;
font-weight: 900;
padding-top: 3rem;
padding-bottom: 1.5rem;
border-radius: 10px;

`

const StyledH1 = styled.div`
background-image: linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%);
margin-top: 5rem;
border-radius: 10px;
`

const ContactWrapper = styled.div`
margin: 5rem;
padding: 3rem;
display: flex;

@media screen and (max-width: 1000px) {
display: block;
}

@media screen and (max-width: 600px) {
}

`
const ReachOut = styled.div`
font-size: 3rem;
@media screen and (max-width: 1000px) {
text-align: center;
}


`
const StyledText = styled.div`
padding-top: 3rem;
font-size: 2.5rem;
line-height: 2;
`

const ReachMeWrapper = styled.div`
width: 100%;



img {
    width: 30%;
}

`