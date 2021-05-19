import React, { useState } from 'react'
import api from '../../services/api'
import { Sections } from '../Signup/styles'
import { useHistory } from "react-router-dom";
import { Input, Container, PasswordInput, SubmitButton, Text, ButtonText, Forgotten } from './styles'

export default function Login() {
    let history = useHistory();
    const [phone, setPhone] = useState('')
    const [id,setID] = useState('')
    function mascararTel(v){
        v=v.replace(/\D/g,"");            
        v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); 
        v=v.replace(/(\d)(\d{4})$/,"$1-$2");   
        return v;
    }
    //Função para requisitar um login
    async function loginRequest(phone) {
        await api.get(`/login/?phone=${phone}&key=ac503125220aec9d0f3ddc4731a9565e`).then(r => localStorage.setItem('login', r.data._id))
        history.push("/")
        window.location.reload()
    }
    
    
    return (
       <Sections>
            <Container>
            <div style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
            <Text>Login:</Text>
            <Input placeholder="Telefone" onChange={text => {text.target.value = mascararTel(text.target.value); setPhone(text.target.value)}}/>

            <SubmitButton onClick={() => loginRequest(phone)}>
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