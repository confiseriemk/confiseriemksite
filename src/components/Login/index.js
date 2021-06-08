import React, { useState } from 'react'
import api from '../../services/api'
import { Sections } from '../Signup/styles'
import { useHistory } from "react-router-dom";
import { GlobalStyle, Input, Container, PasswordInput, SubmitButton, Text, ButtonText, Forgotten } from './styles'

export default function Login() {
    let history = useHistory();
    const [email, setEmail] = useState('')
    const [id,setID] = useState('')
    //Função para requisitar um login
    async function loginRequest(email) {
        await api.get(`/login/?email=${email}&key=ac503125220aec9d0f3ddc4731a9565e`).then(r => localStorage.setItem('login', r.data._id))
        history.push("/")
        window.location.reload()
    }
    
    
    return (
       <Sections>
           <GlobalStyle />
            <Container>
            <div style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
            <Text>Login:</Text>
            <Input placeholder="Email" value={email} onChange={text => {text.target.value = setEmail(text.target.value)}}/>

            <SubmitButton onClick={() => loginRequest(email)}>
                <ButtonText>
                    Login
                </ButtonText>
            </SubmitButton>
            <Forgotten>{localStorage.getItem('login')}</Forgotten>
            </div>
        </Container>
       </Sections>
    )
}